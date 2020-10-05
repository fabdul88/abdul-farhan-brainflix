import React from "react";
import UploadVideoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./videoUpload.scss";
import axios from "axios";

class UploadVideo extends React.Component {
  state = {
    title: "",
    channel: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      channel: this.state.channel,
      image: "../../assets/Images/Upload-video-preview.jpg",
    };

    axios({
      url: "http://localhost:8080/videos",
      method: "POST",
      data: payload,
    })
      .then((res) => {
        this.setState({
          title: "",
          channel: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <hr className="upload-video-container__hr-top"></hr>
        <div className="upload-video-container">
          <h1 className="upload-video-container__upload-title">Upload Video</h1>
          <hr className="upload-video-container__hr-center" />
          <div className="upload-video-container__sub">
            <form
              onSubmit={this.submit}
              className="upload-video-container__form"
              action=""
            >
              <div className="upload-video-container__form-container">
                <div className="upload-video-container__heading-image-container">
                  <h3 className="upload-video-container__video-heading">
                    VIDEO THUMBNAIL
                  </h3>
                  <img
                    className="upload-video-container__image"
                    src={UploadVideoThumbnail}
                    alt="Upload"
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
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                      placeholder="Add a title to your  video"
                    />
                  </div>
                  <div className="upload-video-container__description-textbox-container">
                    <h3 className="upload-video-container__description">
                      ADD A VIDEO DESCRIPTION
                    </h3>
                    <textarea
                      className="upload-video-container__textbox"
                      type="textbox"
                      name="channel"
                      value={this.state.channel}
                      onChange={this.handleChange}
                      placeholder="Add a description of your video"
                    ></textarea>
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
                <button
                  onClick={this.submit}
                  className="upload-video-container__publish-button"
                >
                  PUBLISH
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default UploadVideo;
