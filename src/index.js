import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './hero.css';
import $ from 'jquery';
import {TweenMax, TimelineMax } from 'gsap'
import {ScrollMagic } from 'scrollmagic'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// GSAP Timline vars
var horzTl = new TimelineMax();
var processTl = new TimelineMax();

// ScrollMagic scenes
// horizontal scrolling scene
var horzScene = new ScrollMagic.Scene({
	triggerElement: '#process',
	triggerHook: 0,
	duration: '300%'
})
.setTween(horzTl)
.setPin('#process')
.addTo(controller);

// process scene
var processScene = new ScrollMagic.Scene({
	triggerElement: '#process',
	triggerHook: 0,
	duration: '300%'
})
.setTween(processTl)
.addTo(controller);

// Set timeline objects
horzTl
  //side scrolling
  .to('.horizontal-container', .2, {x: '-66.6666%', ease:Linear.easeNone})
;

processTl
  // steps
  .from('.step-01', .02, {autoAlpha:0}) 
  .add('line')
  .to('.time', 3, {strokeDashoffset:0, ease:Linear.easeNone}, 'line')  
	.from('.step-02', .02, {autoAlpha:0}, 'line+=.15')
	.from('.step-03', .02, {autoAlpha:0}, 'line+=.6')
	.from('.step-04', .02, {autoAlpha:0}, 'line+=1.07')
	.from('.step-05', .02, {autoAlpha:0}, 'line+=1.5')
	.from('.step-06', .02, {autoAlpha:0}, 'line+=1.75')
	.from('.step-07', .02, {autoAlpha:0}, 'line+=2.33')
	.from('.step-08', .02, {autoAlpha:0}, 'line+=2.75')
	.from('.step-09', .02, {autoAlpha:0, onComplete: function() {
    // destroy timelines
    horzScene.destroy();
    processScene.destroy();
    // remove added styles
    TweenMax.set(".scrollmagic-pin-spacer", {clearProps: "all"});
    //keep window in place
    scroll(0, innerHeight);
  }})
;


var cursor = $(".cursor"),
		follower = $(".cursor-follower");

var posX = 0,
		posY = 0;
var mouseX = 0,
		mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function(){						//함수 안에 함수는 콜백함수
		posX += (mouseX - posX) / 9;		//마우스X값에서 현재위치posX값 나누기 9 
		posY += (mouseY - posY) / 9;	
		
		TweenMax.set(follower, {
			css: {
				left: posX - 12,
				top: posY - 12
			}
		});
		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}	
})

$(document).on("mousemove", function(e){		//마우스값을 e에 저장
	mouseX = e.pageX;
	mouseY = e.pageY;
});

$(".link").on("mouseenter",function(){
	cursor.addClass("active");
	follower.addClass("active");
});

$(".link").on("mouseleave",function(){
	cursor.removeClass("active");
	follower.removeClass("active");
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
