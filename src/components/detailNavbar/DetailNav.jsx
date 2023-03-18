import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import arrrowLeft from '../../assests/svg/angle-left-solid.svg';
import micro from '../../assests/svg/microphone-solid.svg';
import gear from '../../assests/svg/gear-solid.svg';

const DetailNav = () => {
  const countrySelected = useSelector((state) => state.countryDetail.countrySelected);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="display__block">
          <img
            src={arrrowLeft}
            alt="Angle Left Arrow"
            className="nav__logo__arrow"
          />
        </Link>

        <span className="nav__text__center font__style">
          {countrySelected}
          {' '}
          Details
        </span>

        <div className="nav__box__right">
          <button type="button">
            <img src={micro} alt="Microphone" />
          </button>
          <button type="button">
            <img src={gear} alt="Gear" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default DetailNav;
