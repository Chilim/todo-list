import React from 'react';
import NewTaskForm from './NewTaskForm';
import Filter from './Filter';
import Tasks from './Tasks';

export default () => (
  <div className="col-5">
    <NewTaskForm />
    <Filter />
    <Tasks />
  </div>  
)