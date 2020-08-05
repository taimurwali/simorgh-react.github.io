import React from 'react';
import './hero.css';
// import jQuery from 'jquery';
import logo from './logo.svg'; // with import


function Hero() {
  return (
    <div className="sec-1">
      <div id="page">
        <div className="o-main">
          <header className="c-header">
            <a href="#" className="c-logo">
              <img className="logo-size" src={logo} />
            </a>
          </header>
        </div>

        <div className="c-cursor">
          <div className="c-cursor__pointer"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
