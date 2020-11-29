import React from "react";
import Views from "../../assets/Icons/SVG/Icon-views.svg";
import Likes from "../../assets/Icons/SVG/Icon-likes.svg";
class VideoInfo extends React.Component {
  render() {
    const getDateString = (timestamp) => {
      const plus0 = (num) => `0${num.toString()}`.slice(-2);

      const d = new Date(timestamp);

      const year = d.getFullYear();
      const monthTmp = d.getMonth() + 1;
      const month = plus0(monthTmp);
      const date = plus0(d.getDate());
      // const hour = plus0(d.getHours());
      // const minute = plus0(d.getMinutes());
      // const second = plus0(d.getSeconds());

      return `${year}-${month}-${date}`;
    };
    return (
      <div className="video-container__info-container">
        <h1 className="video-container__heading">{this.props.item.title}</h1>
        <div className="video-container__status">
          <div className="video-container__author-container">
            <h2 className="video-container__author">
              {this.props.item.channel}
            </h2>
            <p className="video-container__author-date">
              {getDateString(this.props.item.timestamp)}
            </p>
          </div>
          <div className="video-container__views-likes-container">
            <div className="video-container__views-container">
              <img
                className="video-container__views-icon"
                src={Views}
                alt="Views SVG Icon"
              />
              <p className="video-container__views-count">
                {this.props.item.views}
              </p>
            </div>

            <div className="video-container__likes-container">
              <img
                className="video-container__likes-icon"
                src={Likes}
                alt="Likes SVG Icon"
              />
              <p className="video-container__likes-count">
                {this.props.item.likes}
              </p>
            </div>
          </div>
        </div>
        <hr className="video-container__hr video-container__hr-hide" />
        <section className="video-container__description">
          {this.props.item.description}
        </section>
        <p className="video-container__comments-count">3 comments</p>
      </div>
    );
  }
}

export default VideoInfo;
