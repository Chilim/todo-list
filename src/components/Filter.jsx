import React from 'react';


export default class Filter extends React.Component {
  render() {
    return (
      <div className="mt-3 d-flex justify-content-around">
        <button type="button" className="btn btn-link border-0 p-0" data-test="task-filter-all">All Tasks</button>
        <button type="button" className="btn btn-link border-0 p-0" data-test="task-filter-active">Active Tasks</button>
        <button type="button" className="btn btn-link border-0 p-0" data-test="task-filter-finished">Finished Tasks</button>
      </div>
    );
  } 
}
