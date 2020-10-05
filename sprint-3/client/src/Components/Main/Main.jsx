import React from "react";
import "./main.scss";
import VideoSection from "../../Components/VideoSection/VideoSection";
import VideoInfo from "../../Components/VideoInfo/VideoInfo";
import Form from "../Form/Form";
import Comments from "../Comments/Comments";
import SideVideo from "../SideVideo/SideVideo";
import NextVideo from "../NextVideo/NextVideo";
import "../../styles/partials/_mediaQuery.scss";
import axios from "axios";

class Main extends React.Component {
  state = {
    mainVideo: {
      comments: [],
    },

    // side video array
    sideVideo: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/videos/`)
      .then((response) => {
        axios.get(`http://localhost:8080/videos/1af0jruup5gu/`).then((res) => {
          let mainVideo = res.data;
          mainVideo.comments = res.data.comments;

          this.setState({
            mainVideo: mainVideo,
            sideVideo: response.data,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id === prevProps.match.params.id) {
      return;
    }
    const videoId = this.props.match.params.id || "1af0jruup5gu";
    axios
      .get(`http://localhost:8080/videos/${videoId}`)
      .then((response) => {
        this.setState({
          mainVideo: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <main>
        <VideoSection item={this.state.mainVideo} />

        <section className="section-container">
          <section className="section-container__left">
            <VideoInfo item={this.state.mainVideo} />

            <Form />

            {this.state.mainVideo.comments &&
              this.state.mainVideo.comments.map((item) => {
                return (
                  <Comments
                    key={item.id}
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
              {this.state.sideVideo.sideVideo &&
                this.state.sideVideo.sideVideo
                  .filter((item) => item.id !== this.state.mainVideo.id)
                  .map((item) => {
                    return (
                      <SideVideo item={item} key={item.id} itemId={item.id} />
                    );
                  })}
            </div>
          </section>
        </section>
      </main>
    );
  }
}

export default Main;
