import React from 'react';
import './hero.css';
// import jQuery from 'jquery';
function Hero() {
    return (
    <div className="sec-1">
<div id="page">
  <div class="o-main">
    <header class="c-header">
      <a href="#" class="c-logo">
        SimorghSPS
      </a>

      <nav class="c-menu" aria-label="Kwak nam sin">
        <ul class="c-menu__list" role="menubar" aria-label="Kwak nam sin">
          <li>
            <a class="c-menu__link c-magnetic" role="menuitem" href="#"><span>About</span></a>
          </li>
          <li>
            <a class="c-menu__link c-magnetic" role="menuitem" href="#"><span>Work</span></a>
          </li>
          <li>
            <a class="c-menu__link c-magnetic" role="menuitem" href="#"><span>Article</span></a>
          </li>
          <li>
            <a class="c-menu__link c-magnetic" role="menuitem" href="#"><span>Contact</span></a>
          </li>
        </ul>
      </nav>
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
