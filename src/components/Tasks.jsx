import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../actions';
import { filteredTasksSelector } from '../selectors';

const mapStateToProps = (state) => {
  const tasks = filteredTasksSelector(state);
  return { tasks };
}

const actionCreator = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

class Tasks extends React.Component {
  handleRemove = id => () => {
    const { removeTask } = this.props;
    removeTask({ id });
  };

  handleToggleTaskState = id => () => {
    const { toggleTaskState } = this.props;
    toggleTaskState({ id });
  };

  renderTask = ({ id, text, state }) => {
    const itemClass = cn({
      'list-group-item d-flex': true,
      'bg-dark text-light': state !== 'active',
      'bg-light text-dark': state === 'active',
    });
    return (
        <li key={id} className={itemClass}>
          <span className="mr-auto">
            <a href="#" data-test="task-toggle-state" onClick={this.handleToggleTaskState(id)}>
              {text}
            </a>
          </span>
          <button type="button" data-test="task-remove" className="close" onClick={this.handleRemove(id)}>
            <span>&times;</span>
          </button>
        </li>
    );
  }

  render() {
    const { tasks } = this.props;
    if (tasks.length === 0) {
      return null;
    }
    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(this.renderTask)}
        </ul>
      </div>
    );
  }
};

export default connect(mapStateToProps, actionCreator)(Tasks);