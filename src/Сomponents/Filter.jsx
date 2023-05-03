import React from "react";
import PropTypes from 'prop-types';


const Filter = ({filter, onFilterChange}) => {
  return( <label htmlFor="">Find contact by name
      <input defaultValue={filter} type="text" onChange={onFilterChange}/>
        </label>)
}
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
}
