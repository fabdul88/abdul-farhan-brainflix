import React from "react";
import "./videoSection.scss";
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
      </div>
    );
  }
}

export default VideoSection;
