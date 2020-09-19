import React from "react";
import "./main.scss";
import VideoSection from "../../Components/VideoSection/VideoSection";
import VideoDescription from "../VideoDescription/VideoDescription";

class Main extends React.Component {
  render() {
    return (
      <main>
        <VideoSection views="1,001,023" />
        <VideoDescription />
      </main>
    );
  }
}

export default Main;
