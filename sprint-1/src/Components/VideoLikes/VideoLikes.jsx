import React, { Component } from "react";
import Likes from "../../assets/Icons/SVG/Icon-likes.svg";

class VideoLikes extends Component {
  state = {
    timesLiked: 110985,
  };

  likesCounter = () => {
    this.setState({
      timesLiked: this.state.timesLiked + 1,
    });
  };

  render() {
    return (
      <div className="video-container__likes-container">
        <img
          className="video-container__likes-icon"
          src={Likes}
          alt="Likes SVG Icon"
          onClick={() => this.likesCounter()}
        />
        <p className="video-container__likes-count">
          {new Intl.NumberFormat().format(this.state.timesLiked)}
        </p>
      </div>
    );
  }
}

export default VideoLikes;
