import React from "react";
import "./main.scss";
import VideoSection from "../../Components/VideoSection/VideoSection";
import Form from "../Form/Form";
import Comments from "../Comments/Comments";
import SideVideo from "../SideVideo/SideVideo";
import NextVideo from "../NextVideo/NextVideo";
import "../../styles/partials/_mediaQuery.scss";

class Main extends React.Component {
  render() {
    return (
      <main>
        {this.props.mainVideo.map((item) => (
          <VideoSection item={item} />
        ))}
        <Form addComment={this.props.addComment} />

        {/* create comments elements */}
        {this.props.comments.map((item) => {
          return <Comments item={item} />;
        })}
        <NextVideo />
        <div className="side-container">
          {/* create side Video elements */}
          {this.props.sideVideo.map((item) => (
            <SideVideo item={item} />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
