import React from 'react';
import './hero.css';
// import jQuery from 'jquery';
import logo from './logo.svg'; // with import

console.log(logo);

function Hero() {
  return (
    <div className="sec-1">
      <div id="page">
        <div class="o-main">
          <header class="c-header">
            <a href="#" class="c-logo">
              <img class="logo-size" src={logo} />
            </a>
          </header>
        </div>

        <div class="c-cursor">
          <div class="c-cursor__pointer"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
