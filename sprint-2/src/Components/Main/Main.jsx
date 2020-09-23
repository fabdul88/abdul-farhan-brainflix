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
          <VideoSection key={item.id} item={item} />
        ))}
        <section className="section-container">
          <section className="section-container__left">
            {this.props.mainVideo.map((item) => (
              <VideoInfo key={item.id} item={item} />
            ))}

            <Form />

            {/* create comments elements */}
            {this.props.mainVideo[0].comments.map((item) => {
              return (
                <Comments
                  key={item.id}
                  item={item}
                  name={item.name}
                  date={item.date}
                  comment={item.comment}
                />
              );
            })}
          </section>
          <section className="section-container__right">
            <NextVideo />
            <div className="side-container">
              {/* create side Video elements */}
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
