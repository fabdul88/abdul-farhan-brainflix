import React from "react";
import "./comments.scss";

function Comments(props) {
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
              <p>{getDateString(props.timestamp)}</p>
            </div>
          </div>
          <p className="comments-container__comment">{props.comment}</p>
        </div>
      </div>
    </>
  );
}

export default Comments;
