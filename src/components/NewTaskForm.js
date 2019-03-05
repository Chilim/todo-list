import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { updateNewTaskText, addTask } from '../actions';

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
    text: state.text
  };
  return props;
};

const actionCreators = {
  updateNewTaskText: updateNewTaskText,
  addTask: addTask,
};

class NewTaskForm extends React.Component {
  handleInput = e => {
    e.preventDefault();
    const { updateNewTaskText } = this.props;
    updateNewTaskText(e.target.value);
  };

  handleTask = e => {
    e.preventDefault();
    const { addTask, text } = this.props;
    const task = { [_.uniqueId('task_')]: text };
    addTask(task);
  };

  render() {
    const { text } = this.props;
    return (
      <form action="" className="form-inline" onSubmit={this.handleTask}>
        <div className="form-group mx-sm-3">
          <input
            type="text"
            required
            value={text}
            onChange={this.handleInput}
          />
        </div>
        <input type="submit" className="btn btn-primary btn-sm" value="Add" />
      </form>
    )
  }  
};

export default connect(mapStateToProps, actionCreators)(NewTaskForm);
