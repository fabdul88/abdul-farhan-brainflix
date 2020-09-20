import React from "react";
import Views from "../../assets/Icons/SVG/Icon-views.svg";
import "./videoSection.scss";
import Likes from "../../assets/Icons/SVG/Icon-likes.svg";
import Play from "../../assets/Icons/SVG/Icon-play.svg";
import Fullscreen from "../../assets/Icons/SVG/Icon-fullscreen.svg";
import Volume from "../../assets/Icons/SVG/Icon-volume.svg";

class VideoSection extends React.Component {
  render() {
    return (
      <div className="video-container">
        <div className="video-container__sub">
          <video
            className="video-container__video"
            poster={this.props.item.image}
          ></video>
          <div className="video-container__play-container">
            <button className="video-container__play-button" type="button">
              <img
                className="video-container__play-image"
                src={Play}
                alt="Play button"
              />
            </button>
          </div>
          <div className="video-container__scrubber-container">
            <button className="video-container__scrubber-button" type="button">
              <div className="video-container__scrubber-bar"></div>
              <span className="video-container__scrubber-time">
                0.00 / 0.42
              </span>
            </button>
          </div>
          <div className="video-container__fullscreen-container">
            <button
              className="video-container__fullscreen-button"
              type="button"
            >
              <img
                className="video-container__fullscreen-image"
                src={Fullscreen}
                alt="Fullscreen"
              />
            </button>
            <button className="video-container__volume-button" type="button">
              <img
                className="video-container__volume-image"
                src={Volume}
                alt="Volume"
              />
            </button>
          </div>
        </div>
        <h1 className="video-container__heading">{this.props.item.title}</h1>
        <div className="video-container__status">
          <div className="video-container__author-container">
            <h2 className="video-container__author">
              {this.props.item.channel}
            </h2>
            <p className="video-container__author-date">
              {this.props.item.timestamp}
            </p>
          </div>
          <div className="video-container__views-likes-container">
            <div className="video-container__views-container">
              <img
                className="video-container__views-icon"
                src={Views}
                alt="Views SVG Icon"
              />
              <p className="video-container__views-count">
                {this.props.item.views}
              </p>
            </div>

            <div className="video-container__likes-container">
              <img
                className="video-container__likes-icon"
                src={Likes}
                alt="Likes SVG Icon"
              />
              <p className="video-container__likes-count">
                {this.props.item.likes}
              </p>
            </div>
          </div>
        </div>
        <hr className="video-container__hr" />
        <section className="video-container__description">
          {this.props.item.description}
        </section>
        <p className="video-container__comments-count">
          {this.props.item.comments}
        </p>
      </div>
    );
  }
}

export default VideoSection;
