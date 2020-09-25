import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import axios from "axios";

class App extends React.Component {
  state = {
    // Main Video
    mainVideo: {
      comments: [],
    },

    // side video array
    sideVideo: [],
  };

  componentDidMount() {
    console.log("This is a test");
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=72b974e2-f5dd-40de-b24f-495ef6511f0c`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          mainVideo: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/?api_key=72b974e2-f5dd-40de-b24f-495ef6511f0c`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          sideVideo: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          mainVideo={this.state.mainVideo}
          sideVideo={this.state.sideVideo}
        />
      </div>
    );
  }
}

export default App;
