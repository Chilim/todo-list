import React from 'react';
import NewTaskForm from './NewTaskForm';
import Tasks from './Tasks';

export default () => (
  <div className="col-5">
    <NewTaskForm />
    <Tasks />
  </div>  
)