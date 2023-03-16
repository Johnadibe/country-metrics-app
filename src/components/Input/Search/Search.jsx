import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from 'features/homeSlice/homeSlice';
import './Search.css';

const Search = () => {
  const dispatch = useDispatch();
  const onSearchHandler = (e) => {
    dispatch(search(e.target.value));
  };
  return (
    <div>
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
