import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import micro from '../../assests/svg/microphone-solid.svg';
import gear from '../../assests/svg/gear-solid.svg';
import arrrowLeft from '../../assests/svg/angle-left-solid.svg';
import './Navbar.css';

const Navbar = () => {
  const countrySelected = useSelector((state) => state.countryDetail.countrySelected);

  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav__logo__box">
          <Link to="/" className={usePathname() === '/countrydetail' ? 'display__inline' : 'display__none'}>
            <img
              src={arrrowLeft}
              alt=""
            />
          </Link>
          <h2 className="nav__logo__text">
            {usePathname() === '/countrydetail' ? '' : '2023'}
          </h2>
        </div>

        <span className="nav__text__center">
          {usePathname() === '/countrydetail' ? `${countrySelected} Details` : 'Europe Population'}
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

export default Navbar;
