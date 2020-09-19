import React from "react";
import Video from "../../assets/Images/video-list-0.jpg";
import Views from "../../assets/Icons/SVG/Icon-views.svg";
import VideoLikes from "../VideoLikes/VideoLikes";
import "./videoSection.scss";

const VideoSection = (props) => {
  return (
    <div className="video-container">
      <div className="video-container__sub">
        <video className="video-container__video" poster={Video}></video>
      </div>
      <h1 className="video-container__heading">BMX Rampage: 2018 Highlights</h1>
      <div className="video-container__status">
        <div className="video-container__author-container">
          <h2 className="video-container__author">By Red Cow</h2>
          <p className="video-container__author-date">12/18/2018</p>
        </div>
        <div className="video-container__views-likes-container">
          <div className="video-container__views-container">
            <img
              className="video-container__views-icon"
              src={Views}
              alt="Views SVG Icon"
            />
            <p className="video-container__views-count">{props.views}</p>
          </div>
          <VideoLikes />
        </div>
        <hr className="video-container__hr" />
      </div>
    </div>
  );
};

export default VideoSection;
