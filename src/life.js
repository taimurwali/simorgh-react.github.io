import React from 'react';
import './hero.css';
import brush from '../src/b2.png'; // with import
import brush2 from '../src/b1.png'; // with import
import { Player, ControlBar, BigPlayButton   } from 'video-react';
import './video-react.css';


function Life() {

  return (
    <div className='sec-3'>
      <h3>Life at Simorgh</h3>

      <img className="brush" src={brush} />
      <img className="brush-2" src={brush2} />
        
        <div className="inline v1">
          <Player
      controls= {false}
      autoPlay ={false}
      src="https://videos.ctfassets.net/y920cgi13iu8/1abytSbPZ8kUs9h5pu50M6/d83d8fd5b592b8a89b74b268a6f19bf7/CarlosVelazquez_BeSelfless_Part1_MASTER_H264.mp4"
    >
            <BigPlayButton position="center" />
      <ControlBar autoHide={false} className="my-class" />
    </Player>
        </div>

        <div class="quote-block" ><div class="count"><span>5</span>/5</div><span class="headline">Be selfless</span><div class="quote-icon"><div class="text">“</div></div><blockquote class="underline-child quote quote--default"><p class="quote__text ">We recruit and promote people who want to win as <i>part of a great </i><u><i>company</i></u>.</p></blockquote></div>
        <div className="inline v2">
          <Player
      controls= {false}
      autoPlay ={false}
      src="http://videos.ctfassets.net/y920cgi13iu8/6GF5ybJ2vTO6GTyryLyNoX/beb561bf3c7890e6a87833dccb217bef/AlexBerk_BeSelfless_MASTER_H264.mp4"
    >
            <BigPlayButton position="center" />
      <ControlBar autoHide={false} className="my-class" />
    </Player>
        </div>
        <div className="inline v3">
          <Player
      controls= {false}
      autoPlay ={false}
      src="https://videos.ctfassets.net/y920cgi13iu8/xjv03EjGQPZ4qKz7prk7G/a4f95dccedbdc0f730f96747f4da576b/AlmeidaDye_BeSelfless_MASTER_H264.mp4"
    >
            <BigPlayButton position="center" />
      <ControlBar autoHide={false} className="my-class" />
    </Player>
        </div>
        <div className="inline v4">
          <Player
      controls= {false}
      autoPlay ={false}
      src="https://videos.ctfassets.net/y920cgi13iu8/1abytSbPZ8kUs9h5pu50M6/d83d8fd5b592b8a89b74b268a6f19bf7/CarlosVelazquez_BeSelfless_Part1_MASTER_H264.mp4"
    >
            <BigPlayButton position="center" />
      <ControlBar autoHide={false} className="my-class" />
    </Player>
        </div>
            </div>
    );
}


  
  


export default Life;