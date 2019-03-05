import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { removeTask } from '../actions';

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
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
    removeTask(id);
  };

  render() {
    const { tasks } = this.props;
    // console.log(_.keys(tasks));
    return (
      <div className="mt-3">
        <ul className="list-group">
          {_.keys(tasks).map(id => (
            <li key={id} className="list-group-item d-flex" >
              <span className="mr-auto">{tasks[id]}</span>
              <button type="button" className="close" onClick={this.handleRemove(id)}>
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