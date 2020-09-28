import React from "react";
import "./comments.scss";

function Comments(props) {
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
              <p className="comments-container__name">{props.name}</p>
            </div>
            <div className="comments-container__date">
              <p>{props.date}</p>
            </div>
          </div>
          <p className="comments-container__comment">{props.comment}</p>
        </div>
      </div>
    </>
  );
}

export default Comments;
