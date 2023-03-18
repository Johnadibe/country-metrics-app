import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CircleArrrow from '../../assests/svg/circle-arrow-right-solid.svg';
import { fetchCountries } from '../../features/homeSlice/homeSlice';
import { fetchCountryDetail, countrySelectedAction } from '../../features/countryDetailSlice/countryDetailSlice';
import Search from '../../components/Input/Search/Search';
import EuropePopulation from '../../components/EuropePopulation/EuropePopulation';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countriesData);
  const searchField = useSelector((state) => state.country.searchResult);
  const status = useSelector((state) => state.country.status);

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
  };

  return (
    <div className="home__body">
      <Navbar />
      <EuropePopulation />
      <Search />
      <div className="country__grid">
        {
        filteredCountries().length > 0 ? (
          filteredCountries().map((country) => (
            <div className="card__flex-column" key={country.name}>
              <Link
                to={`/countrydetail/${country.id}`}
                id={country.name}
                onClick={(e) => { onCardHandler(e); }}
                className="card__link"
              >
                <button type="button" id={country.name} className="country__arrow__link">
                  <img src={CircleArrrow} id={country.name} alt="Circle Arrow Button Link" />
                </button>
                <div id={country.name} className="grid__image">
                  <img
                    id={country.name}
                    src={country.map}
                    alt={country.cca2}
                  />
                </div>
                <div id={country.name} className="card__text">
                  <h1 id={country.name}>{country.name}</h1>
                  <p id={country.name}>{country.population}</p>
                </div>
              </Link>
            </div>

          ))
        ) : (
          <h1 className="card_text_none">OOps! No Country Found. Please Search Again</h1>
        )
}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
