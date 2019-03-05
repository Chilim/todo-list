import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { updateNewTaskText, addTask, removeTask, toggleTaskState } from '../actions';
import _ from 'lodash';

const tasks = handleActions({
  [addTask](state, { payload }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [payload.id]: payload },
      allIds: [payload.id, ...allIds],
    };
  },
  [removeTask](state, { payload: { id } }) {
    const posts = _.omit(state.byId, id)
    return ({ ...state, byId: posts });
  }
}, { byId: {}, allIds: [] });

const text = handleActions({
  [updateNewTaskText](state, { payload: { text } }) {
    return text;
  },
  [addTask](state) {
    return '';
  },
}, '');

export default combineReducers({
  text,
  tasks
});
