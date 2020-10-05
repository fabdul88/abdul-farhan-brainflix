const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;
const Video = require("./model/videos");
const VideoInfo = new Video();
app.use(cors());
const bodyParser = require("body-parser");
const upload = require("./data.json");
app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.send("Listening on port 8080");
});

app.get("/videos", async function (_req, res) {
  const videos = await VideoInfo.getVideos();
  res.status(200).json(videos);
});

app.get("/videos/:id", async function (req, res) {
  const videos = await VideoInfo.getVideoDetailsById(req.params["id"]);

  res.status(200).json(videos);
});

app.post("/videos", (req, res) => {
  upload.videos.push(req.body);
  res.send(upload.videos);
});

app.listen(PORT, () => console.log(`started on ${BACKEND_URL} ${PORT}`));
