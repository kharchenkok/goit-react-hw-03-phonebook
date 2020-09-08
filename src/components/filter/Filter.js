import React from 'react';
import Style from './FilterStyles.module.css';
import PropTypes from 'prop-types';

export default function Filter({ handleFilter, filter }) {
  return (
    <form className={Style.form__style}>
      <label className={Style.lable__style}>
        Find contacts by name
        <input
        placeholder="Name"
          className={Style.input__style}
          onChange={handleFilter}
          value={filter}
          type="text"
        ></input>
      </label>
    </form>
  );
}
Filter.propTypes = { 
    handleFilter: PropTypes.func, 
    filter: PropTypes.string };
