import React from "react";
import "./form.scss";
import ProfileImage from "../../assets/Images/Mohan-muruge.jpg";

function Form() {
  return (
    <>
      <p className="form-container__slogan">JOIN THE CONVERSATION</p>
      <div className="form-container">
        <form className="form-container__form" action="" name="Form">
          <div className="form-container__image-text-container">
            <input
              className="form-container__image"
              type="image"
              src={ProfileImage}
              alt="Form Profile img"
            />
            <textarea
              className="form-container__text-area"
              type="textarea"
              name="comment"
            ></textarea>
          </div>
          <button className="form-container__button">COMMENT</button>
        </form>
      </div>
    </>
  );
}

export default Form;
