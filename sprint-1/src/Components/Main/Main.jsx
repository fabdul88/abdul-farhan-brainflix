import React from "react";
import "./main.scss";
import VideoSection from "../../Components/VideoSection/VideoSection";
import VideoInfo from "../../Components/VideoInfo/VideoInfo";
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
        <section className="section-container">
          <section className="section-container__left">
            {this.props.mainVideo.map((item) => (
              <VideoInfo item={item} />
            ))}

            <Form addComment={this.props.addComment} />

            {/* create comments elements */}
            {this.props.comments.map((item) => {
              return <Comments item={item} />;
            })}
          </section>
          <section className="section-container__right">
            <NextVideo />
            <div className="side-container">
              {/* create side Video elements */}
              {this.props.sideVideo.map((item) => (
                <SideVideo item={item} />
              ))}
            </div>
          </section>
        </section>
      </main>
    );
  }
}

export default Main;
