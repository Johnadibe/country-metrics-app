import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from 'features/homeSlice/homeSlice';
import searchIcon from '../../../assests/svg/magnifying-glass-solid.svg';
import './Search.css';

const Search = () => {
  const dispatch = useDispatch();
  const onSearchHandler = (e) => {
    dispatch(search(e.target.value));
  };
  return (
    <div className="search__box">
      <img className="search__icon" src={searchIcon} alt="" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="search__input"
        onChange={onSearchHandler}
      />
    </div>
  );
};

export default Search;
