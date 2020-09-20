import React from "react";
import "./nextVideo.scss";
class NextVideo extends React.Component {
  render() {
    return (
      <>
        <hr className="next-video-container__hr" />
        <div className="next-video-container">
          <p className="next-video-container__next">NEXT VIDEO</p>
        </div>
      </>
    );
  }
}

export default NextVideo;
