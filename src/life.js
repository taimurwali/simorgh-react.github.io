import React from 'react';
import './hero.css';
import brush from '../src/b2.png'; // with import
import brush2 from '../src/b1.png'; // with import



function Life() {

    return (
    <div className='sec-3'>
        <h3>Life at Simorgh</h3>

        <img className="brush" src={brush} />
        <img className="brush-2" src={brush2} />




        <div id="process-wrap">
<div id="process" class="horizontal-container">
  <section class="horz">
      <div class="wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5321.96 736.46">
            <text class="step step-01" transform="translate(90 192.72)">Discovery</text>
            <text class="step step-02" transform="translate(692.33 340.72)">Research</text>
            <text class="step step-03" transform="translate(1330.24 295.72)">Concept</text>
            <text class="step step-04" transform="translate(1952.1 396.72)">Client Approval</text>
            <text class="step step-05" transform="translate(2630.96 42.72)">Design</text>
            <text class="step step-06" transform="translate(3042.1 245.72)">Client Approval</text>
            <text class="step step-07" transform="translate(3883.88 190.72)">Production</text>
            <text class="step step-08" transform="translate(4480.1 372.72)">Client Approval</text>
            <text class="step step-09" transform="translate(5105.81 192.72)">Launch</text>

            <path class="time" stroke-linecap="round" stroke-width="24px" stroke-miterlimit="10" d="M655,527.31s322.07-25.41,533.19,93.83c71.79,40.55,172.58,86.68,266.25,112.56,18,5,103.06,30,210.7,21.67,151.82-11.73,329.71-90.74,383.13-117.12,144-71.08,340.79-73.54,461.33-75.1,85.24-1.1,267.8-.65,477.6-112.72S3531.93,302.31,3773,492.78s521.92,227.4,799.49,92.52,520-63.85,520-63.85" transform="translate(-200.6 -342.53)"/>


          </svg>
      </div>
  </section>
  </div></div>



    </div>
    );
}


  
  


export default Life;