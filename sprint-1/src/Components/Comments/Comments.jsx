import React from "react";
import "./comments.scss";

class Comments extends React.Component {
  render() {
    return (
      <>
        <hr className="comments-container__hr"></hr>
        <div className="comments-container">
          <div className="comments-container__grey-image-container">
            <div className="comments-container__grey-image"></div>
          </div>
          <div className="comments-container__info-container">
            <div className="comments-container__name-date-container">
              <div>
                <p className="comments-container__name">
                  {this.props.item.name}
                </p>
              </div>
              <div className="comments-container__date">
                <p>{this.props.item.date}</p>
              </div>
            </div>
            <p className="comments-container__comment">
              {this.props.item.comment}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Comments;
