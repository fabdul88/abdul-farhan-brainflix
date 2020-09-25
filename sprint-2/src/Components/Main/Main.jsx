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
    console.log(this.props);
    return (
      <main>
        <VideoSection item={this.props.mainVideo} />

        <section className="section-container">
          <section className="section-container__left">
            <VideoInfo item={this.props.mainVideo} />

            <Form />

            {this.props.mainVideo.comments &&
              this.props.mainVideo.comments.map((item) => {
                return (
                  <Comments
                    key={item.id}
                    item={item}
                    name={item.name}
                    date={item.timestamp}
                    comment={item.comment}
                  />
                );
              })}
          </section>
          <section className="section-container__right">
            <NextVideo />
            <div className="side-container">
              {this.props.sideVideo.map((item) => (
                <SideVideo key={item.id} item={item} />
              ))}
            </div>
          </section>
        </section>
      </main>
    );
  }
}

export default Main;
