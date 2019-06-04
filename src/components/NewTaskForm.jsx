import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { addTask } from '../actions';

const mapStateToProps = (state) => {
  const props = {};
  return props;
};

const actionCreators = {
  addTask: addTask,
};

class NewTaskForm extends React.Component {

  handleAddTask = (values) => {
    const { addTask, reset } = this.props;
    const task = { ...values, id: _.uniqueId(), state: 'active' };
    addTask({ task });
    reset();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-inline" onSubmit={handleSubmit(this.handleAddTask)}>
        <div className="form-group mx-sm-3">
          <Field name="text" required component="input" type="text" />
        </div>
        <input type="submit" className="btn btn-primary btn-sm" value="Add" />
      </form>
    )
  }  
};

const ConnectedNewTaskForm = connect(mapStateToProps, actionCreators)(NewTaskForm);

export default reduxForm({
  form: 'newTask',
})(ConnectedNewTaskForm);
