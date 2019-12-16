import React, { Component } from 'react';
import { Link } from "react-router-dom";
import levarIcon from '../../assets/images/levarlogo_whiteHoriz.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <section className="levar-logo">
          <Link to="/home">
            <img src={levarIcon} alt="levAR" />
          </Link>
        </section>
        <section className="levar-links">
          <Link to="/about">About</Link>
        </section>
      </div>
    )
  }
}

export default Header;
