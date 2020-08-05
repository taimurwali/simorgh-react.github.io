import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './hero.css';
import $ from 'jquery';
import TweenMax from 'gsap'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


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
