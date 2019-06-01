import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import cn from 'classnames';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { tasks: { byId, allIds } } = state;
  const tasks = allIds.map(id => byId[id]);
  return { tasks };
};

const actionCreator = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

class Tasks extends React.Component {
  
  handleRemove = id => (e) => {
    e.preventDefault();
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
              {state === 'active' ? text : <s>{text}</s>}
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