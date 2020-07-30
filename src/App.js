import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

import './App.css';
import Test from './Main';




function App() {
  return (
    <div>
      <Test firstName="taimur" lastName="wali" /> 
    </div>
    // <div className="App-div">
    //   <HorizontalScroll reverseScroll = {true}>
    //       <div  className="sec-1">asda</div>
    //       <div   className="sec-2"> 123123</div>
    //       <div   className="sec-3"> @!#!@#</div>
    //   </HorizontalScroll>
    //   </div>
  );
}

export default App;
