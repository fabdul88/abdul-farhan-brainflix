import React from "react";
import "./form.scss";
import ProfileImage from "../../assets/Images/Mohan-muruge.jpg";

function Form({ addComment }) {
  const clickHandler = function (event) {
    event.preventDefault();
    console.log(event.target.comment.value);

    addComment({
      id: Date.now(),
      date: Date.now(),
      comment: event.target.comment.value,
    });
    document.querySelector(".form-container__form").reset();
  };

  return (
    <div className="form-container">
      <form
        className="form-container__form"
        action=""
        name="Form"
        onSubmit={clickHandler}
      >
        <p className="form-container__comments-count">
          <span className="form-container__comment--state">3</span>Comments
        </p>
        <p className="form-container__slogan">JOIN THE CONVERSATION</p>
        <input
          className="form-container__image"
          type="image"
          src={ProfileImage}
          alt="Form Profile img"
        />
        <input
          className="form-container__text-area"
          type="textarea"
          name="comment"
        />
        <button className="form-container__button">COMMENT</button>
      </form>
    </div>
  );
}

export default Form;
