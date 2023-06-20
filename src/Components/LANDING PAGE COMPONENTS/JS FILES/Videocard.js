import React from "react";
import "../CSS FILES/videocard.css";
import video from '../VIDEOS/model.mp4';

export default function Videocard() {
  return (
    <div className="video-container">
      <div className="video-text">Feel the HYPE</div>
      <div className="video-card">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
 </div>
);
}