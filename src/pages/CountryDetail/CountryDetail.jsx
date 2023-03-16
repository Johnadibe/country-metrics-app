import React from 'react';
import { useSelector } from 'react-redux';
import rightArrow from '../../assests/svg/circle-arrow-right-solid.svg';
import './CountryDetail.css';

const CountryDetail = () => {
  const countryDetail = useSelector((state) => state.countryDetail.detailCountry);

  return (
    <>
      {countryDetail > 0 ? (
        <>
          <div className="detail__header__box">
            <div className="detail__header__box__map">
              <img src={countryDetail[0].map} alt="" />
            </div>
            <div className="detail__header__box__text">
              <h1>{countryDetail[0].name}</h1>
              <p>
                {countryDetail[0].population}
                {' '}
                Population
              </p>
            </div>
          </div>
          <h3>COUNTRY BREAKDOWN - 2023</h3>
          <div className="detail__breakdown__box">
            <div className="detail__breakdown__box__text">
              <h3>Area</h3>
              <p>
                {countryDetail[0].area}
                {' '}
                km
              </p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>

            <div className="detail__breakdown__box__text">
              <h3>National Flag</h3>
              <p>{countryDetail[0].flag}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>

            <div className="detail__breakdown__box__text">
              <h3>Longitude</h3>
              <p>{countryDetail[0].longitude}</p>
              <button type="button">
                <img src="" alt="Right Arrow" />
              </button>
            </div>

            <div className="detail__breakdown__box__text">
              <h3>Latitude</h3>
              <p>{countryDetail[0].latitude}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>

            <div className="detail__breakdown__box__text">
              <h3>Cellular Communication Network</h3>
              <p>{countryDetail[0].ccn3}</p>
              <button type="button">
                <img src={rightArrow} alt="Right Arrow" />
              </button>
            </div>

            <div className="detail__breakdown__box__text">
              <h3>Timezones</h3>
              <p>{countryDetail[0].timezones}</p>
              <button type="button">
                <img src="" alt="Right Arrow" />
              </button>
            </div>
          </div>
        </>
      ) : (<h1>Oops! Please press back </h1>)}
    </>
  );
};

export default CountryDetail;
