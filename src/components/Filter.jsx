import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

const mapStateToProps = (state) => {
  const { currentFilterName } = state.tasks;
  return { currentFilterName };
}

const actionCreators = {
  setTasksFilter: actions.setTasksFilter,
};

class Filter extends React.Component {
  
  handleFilter = (filterName) => {
    const { setTasksFilter } = this.props;
    setTasksFilter({ filterName });
  }

  renderBtns = ([filterName, text]) => {
    const { currentFilterName } = this.props;
    if (filterName === currentFilterName) {
      return text;
    }

    return (
      <button 
        type="button"
        key={filterName}
        onClick={() => this.handleFilter(filterName)} 
        className="btn btn-link border-0 p-0" 
        data-test={`task-filter-${filterName}`}
        >
        {text}
      </button>
    )
  }

  render() {
    return (
      <div className="mt-3 d-flex justify-content-around">
        {filters.map(this.renderBtns)}
      </div>
    );
  }
} 

export default connect(mapStateToProps, actionCreators)(Filter);
