import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import VideoUpload from "./Components/VideoUpload/VideoUpload";
import PageNotFound from "./Components/NotFoundPage/NotFoundPage";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />

            <Route path="/video/:id" component={Main} />

            <Route
              path="/videoupload"
              component={() => {
                return <VideoUpload />;
              }}
            />

            <Route path="/404" component={PageNotFound} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
