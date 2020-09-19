import React from "react";
import "./main.scss";
import VideoSection from "../../Components/VideoSection/VideoSection";
import VideoDescription from "../VideoDescription/VideoDescription";
import Form from "../Form/Form";
import Comments from "../Comments/Comments";
import SideVideo from "../SideVideo/SideVideo";
class Main extends React.Component {
  render() {
    return (
      <main>
        <VideoSection views="1,001,023" />
        <VideoDescription />
        <Form addComment={this.props.addComment} />

        {/* create comments elements */}
        {this.props.comments.map((item) => {
          return <Comments item={item} />;
        })}

        <div>
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
