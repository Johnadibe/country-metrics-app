import React from 'react';
import { useSelector } from 'react-redux';
import rightArrow from '../../assests/svg/circle-arrow-right-solid.svg';
import Footer from '../../components/Footer/Footer';
import './CountryDetail.css';

const CountryDetail = () => {
  const country = useSelector((state) => state.countryDetail.detailCountry);
  return (
    <div className="detail__body">
      {
        country.length > 0 ? (
          <div>
            <div className="detail__header__box">
              <div className="detail__header__box__map">
                <img src={country[0].map} alt="" />
              </div>
              <div className="detail__header__box__text">
                <h1>{country[0].name}</h1>
                <p>
                  {country[0].population}
                  {' '}
                  Population
                </p>
              </div>
            </div>
            <h3 className="country__breakdown__text">COUNTRY BREAKDOWN - 2023</h3>
            <div className="detail__breakdown__box">
              <div className="detail__breakdown__box__text">
                <h3>Area</h3>
                <p>
                  {country[0].area}
                  {' '}
                  km
                </p>
                <button type="button">
                  <img src={rightArrow} alt="Right Arrow" />
                </button>
              </div>
              <div className="detail__breakdown__box__text color__dark">
                <h3>National Flag</h3>
                <img className="country__flag" src={country[0].flag} alt={`${country[0].name} Flag`} />
                <button type="button">
                  <img src={rightArrow} alt="Right Arrow" />
                </button>
              </div>
              <div className="detail__breakdown__box__text">
                <h3>Longitude</h3>
                <p>{country[0].longitude}</p>
                <button type="button">
                  <img src={rightArrow} alt="Right Arrow" />
                </button>
              </div>
              <div className="detail__breakdown__box__text color__dark">
                <h3>Latitude</h3>
                <p>{country[0].latitude}</p>
                <button type="button">
                  <img src={rightArrow} alt="Right Arrow" />
                </button>
              </div>
              <div className="detail__breakdown__box__text">
                <h3>Cellular Communication Network</h3>
                <p>{country[0].ccn3}</p>
                <button type="button">
                  <img src={rightArrow} alt="Right Arrow" />
                </button>
              </div>
              <div className="detail__breakdown__box__text color__dark">
                <h3>Timezones</h3>
                <p>{country[0].timezones}</p>
                <button type="button">
                  <img src={rightArrow} alt="Right Arrow" />
                </button>
              </div>
            </div>
          </div>
        ) : (<h1 className="error__back">Oops! Please press back </h1>)
}
      <Footer />
    </div>
  );
};

export default CountryDetail;
