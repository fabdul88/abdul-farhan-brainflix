import React from "react";
import ProfileImage from "../../assets/Images/Mohan-muruge.jpg";
import UploadIcon from "../../assets/Icons/SVG/Icon-upload.svg";
import { Link } from "react-router-dom";

const HeaderButton = () => {
  return (
    <div className="nav__button-image-container">
      <Link to="/videoupload">
        <button className="nav__button">
          <img
            className="nav__button-image"
            src={UploadIcon}
            alt="Navigation Upload Button"
          />
          UPLOAD
        </button>
      </Link>
      <img className="nav__image" src={ProfileImage} alt="Navigation img" />
    </div>
  );
};

export default HeaderButton;
