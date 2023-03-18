import React from 'react';
import micro from '../../assests/svg/microphone-solid.svg';
import gear from '../../assests/svg/gear-solid.svg';
import logo from '../../assests/image/logoimg.jpg';
import './Navbar.css';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="nav__logo__box">
        <div className="nav__logo__text">
          <img className="logo_img" src={logo} alt="Logo" />
        </div>
      </div>

      <span className="nav__text__center">
        Europe Population
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
export default Navbar;
