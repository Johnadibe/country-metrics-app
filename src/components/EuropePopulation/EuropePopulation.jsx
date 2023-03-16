import React from 'react';
import { useSelector } from 'react-redux';
import './EuropePopulation.css';

const EuropePopulation = () => {
  const countries = useSelector((state) => state.country.countriesData);
  const totalPopulation = () => {
    const total = countries.map((country) => country.population).reduce((a, b) => a + b);
    const formatter = total.toLocaleString('en-US');
    return formatter;
  };
  return (
    <div className="europe__population">
      <img src="https://svgsilh.com/svg/151588.svg" alt="Europe Map" />
      <div className="europe__population__text">
        <h1>Europe</h1>
        <p>
          {countries.length > 0 ? totalPopulation() : 'Loading...'}
          {' '}
          Population
        </p>
      </div>
    </div>
  );
};

export default EuropePopulation;
