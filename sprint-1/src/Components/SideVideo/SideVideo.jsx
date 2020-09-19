import React from "react";
import "./sideVideo.scss";

class SideVideo extends React.Component {
  render() {
    return (
      <aside className="side-container">
        <div className="side-container__sub-container">
          <video
            className="side-container__video"
            poster={this.props.item.image}
          ></video>
          <div>
            <p className="side-container__title">{this.props.item.title}</p>
            <p className="side-container__channel">{this.props.item.channel}</p>
          </div>
        </div>
      </aside>
    );
  }
}

export default SideVideo;
