import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { updateNewTaskText, addTask, removeTask } from '../actions';
import _ from 'lodash';

const tasks = handleActions({
  [addTask](state, { payload }) {
    return { ...payload, ...state };
  },
  [removeTask](state, { payload: id }) {
    return _.omit(state, id);
  }
}, {});

const text = handleActions({
  [updateNewTaskText](state, { payload: text }) {
    return text
  },
  [addTask](state) {
    return '';
  },
}, '');

export default combineReducers({
  text,
  tasks
});
