import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import micro from '../../assests/svg/microphone-solid.svg';
import gear from '../../assests/svg/gear-solid.svg';
import arrrowLeft from '../../assests/svg/angle-left-solid.svg';
import logo from '../../assests/image/logoimg.jpg';
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
          <Link to="/" className={usePathname() === '/countrydetail' ? 'display__block' : 'display__none'}>
            <img
              src={arrrowLeft}
              alt="Angle Left Arrow"
              className="nav__logo__arrow"
            />
          </Link>
          <div className="nav__logo__text">
            {usePathname() === '/countrydetail' ? '' : <img className="logo_img" src={logo} alt="Logo" /> }
          </div>
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
