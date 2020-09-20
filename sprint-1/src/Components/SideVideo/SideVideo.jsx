import React from "react";
import "./sideVideo.scss";

class SideVideo extends React.Component {
  render() {
    return (
      <aside className="side-container__sub">
        <div className="side-container__video-title-channel-container">
          <img
            className="side-container__video-image"
            alt="img thumbnail video"
            src={this.props.item.image}
          ></img>
          <div className="side-container__title-channel-container">
            <p className="side-container__title">{this.props.item.title}</p>
            <p className="side-container__channel">{this.props.item.channel}</p>
          </div>
        </div>
      </aside>
    );
  }
}

export default SideVideo;
