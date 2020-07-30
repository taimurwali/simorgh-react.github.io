import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

import './App.css';
import Test from './Main';




function App() {
  return (
      <div className="App-div">
      <Test firstName="Simorgh" lastName="SPS" /> 

      <HorizontalScroll reverseScroll = {true} config = {{ stiffness: 42, damping: 19 }} animValues    = { 40075 / 360 }>
          <div  className="sec-1">asda</div>
          <div   className="sec-2"> 123123</div>
          <div   className="sec-3"> @!#!@#</div>
      </HorizontalScroll>
    </div>

  );
}

export default App;
