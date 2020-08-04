import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

import './App.css';
import Hero from './hero';
import Services from './Services';
import Life from './life';
import Team from './team';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
      <div className="App-div">
      <HorizontalScroll reverseScroll = {true} config = {{ stiffness: 42, damping: 19 }} animValues    = { 40075 / 360 }>
      <Hero></Hero> 
      <Services></Services>
      <Life></Life>
      <Team></Team>
      </HorizontalScroll>
    </div>

  );
}

export default App;
