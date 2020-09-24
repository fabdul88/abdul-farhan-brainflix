import React from "react";
import UploadVideoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./uploadVideo.scss";

export default function UploadVideo() {
  return (
    <div className="upload-video-container">
      <h1 className="upload-video-container__upload-title">Upload Video</h1>

      <div className="upload-video-container__sub">
        <form className="upload-video-container__form" action="">
          <div className="upload-video-container__form-container">
            <div className="upload-video-container__heading-image-container">
              <h3 className="upload-video-container__video-heading">
                VIDEO THUMBNAIL
              </h3>
              <img
                className="upload-video-container__image"
                src={UploadVideoThumbnail}
                alt=""
              />
            </div>
            <div className="upload-video-container__title-description-container">
              <div className="upload-video-container__title-heading">
                <h3 className="upload-video-container__title">
                  TITLE YOUR VIDEO
                </h3>
                <input
                  className="upload-video-container__text"
                  type="text"
                  placeholder="Add a title to your  video"
                />
              </div>
              <div className="upload-video-container__description-textbox-container">
                <h3 className="upload-video-container__description">
                  ADD A VIDEO DESCRIPTION
                </h3>
                <input
                  className="upload-video-container__textbox"
                  type="textbox"
                  placeholder="Add a description of your video"
                />
              </div>
            </div>
          </div>
          <div className="upload-video-container__buttons-container">
            <div className="upload-video-container__hr-container">
              <hr className="upload-video-container__hr" />
            </div>
            <button className="upload-video-container__cancel-button">
              CANCEL
            </button>
            <button className="upload-video-container__publish-button">
              PUBLISH
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
