import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { removeTask } from '../actions';

const mapStateToProps = (state) => {
  const props = {
    tasks: _.values(state.tasks.byId),
  };
  return props;
} 

const actionCreator = {
  removeTask: removeTask,
}

class Tasks extends React.Component {
  
  handleRemove = id => e => {
    e.preventDefault();
    const { removeTask } = this.props;
    removeTask({ id });
  };

  render() {
    const { tasks } = this.props;
    return (
      <div className="mt-3">
        <ul className="list-group">
          {tasks.map(({ id, text, state }) => (
            <li key={id} className="list-group-item d-flex">
              <span className="mr-auto">
                <a href="#" data-test="task-toggle-state">
                  {state === 'active' ? text : <s>{text}</s>}
                </a>
              </span>
              <button type="button" data-test="task-remove" className="close" onClick={this.handleRemove(id)}>
                <span>&times;</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default connect(mapStateToProps, actionCreator)(Tasks);

