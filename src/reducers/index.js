import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import _ from 'lodash';

const tasks = handleActions({
  [actions.addTask]: (state, action) => {
    const { byId, allIds } = state;
    const { task } = action.payload;
    return {
      byId: { ...byId, [task.id]: task },
      allIds: [task.id, ...allIds],
    };
  },
  [actions.removeTask]: (state, action) => {
    const { id } = action.payload;
    const { byId, allIds } = state;
    return { 
      byId: _.omit(byId, id), 
      allIds: _.without(allIds, id),
    };
  },

  [actions.toggleTaskState]: (state, { payload: { id } }) =>  {
    const task = state.byId[id];
    const newState = task.state === 'active' ? 'completed' : 'active'; 
    const updatedTask = { ...task, state: newState };
    return {
      ...state,
      byId: { ...state.byId, [task.id]: updatedTask },
    };
  }
}, { byId: {}, allIds: [] });

const text = handleActions({
  [actions.updateNewTaskText]: (state, { payload: { text } }) => {
    return text;
  },

  [actions.addTask]: () => '',
}, '');

export default combineReducers({
  text,
  tasks
});