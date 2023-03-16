import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CircleArrrow from '../../assests/svg/circle-arrow-right-solid.svg';
import { fetchCountries } from '../../features/homeSlice/homeSlice';
import { fetchCountryDetail, countrySelectedAction } from '../../features/countryDetailSlice/countryDetailSlice';
import Search from '../../components/Input/Search/Search';
import EuropePopulation from '../../components/EuropePopulation/EuropePopulation';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countriesData);
  const searchField = useSelector((state) => state.country.searchResult);
  const status = useSelector((state) => state.country.status);
  const nav = useNavigate();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  // Filtered countries
  const filteredCountries = () => {
    if (searchField.length > 0) {
      return countries.filter((country) => country.name.toLowerCase()
        .includes(searchField.toLowerCase()));
    }
    return countries;
  };

  const onCardHandler = (e) => {
    dispatch(fetchCountryDetail(e.target.id));
    dispatch(countrySelectedAction(e.target.id));
    nav('/countrydetail');
  };

  return (
    <>
      <EuropePopulation />
      <Search />
      <div className="country__grid">
        {
        filteredCountries().length > 0 ? (
          filteredCountries().map((country) => (
            <div className="card__flex-column" key={country.id}>
              <button type="button" onClick={(e) => { onCardHandler(e); }}>
                <button type="button" className="country__arrow__link">
                  <img src={CircleArrrow} alt="Circle Arrow Button Link" />
                </button>
                <div className="grid__image">
                  <img
                    src={country.map}
                    alt={country.cca2}
                  />
                </div>
                <div className="card__text">
                  <h1>{country.name}</h1>
                  <p>{country.population}</p>
                </div>
              </button>
            </div>
          ))
        ) : (
          <h1 className="card_text_none">OOps! No Country Found. Please Search Again</h1>
        )
}
      </div>
    </>
  );
};

export default Home;
