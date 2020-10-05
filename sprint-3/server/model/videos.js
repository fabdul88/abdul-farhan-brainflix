const fs = require("fs");
const path = "./data.json";

class Video {
  readData = () => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf-8", (error, data) => {
        resolve(JSON.parse(data));
      });
    });
  };
  getVideoDetailsById = async (videoId) => {
    const data = await this.readData();
    return data.videos.find((video) => video.id == videoId);
  };
  getVideos = () => {
    return this.readData();
  };
}

module.exports = Video;
