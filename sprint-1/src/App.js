import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Form from "./Components/Form/Form";

class App extends React.Component {
  state = {
    comments: [
      {
        id: 1,
        name: "Micheal Lyons",
        date: "12/18/2018",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
      },
      {
        id: 2,
        name: "Gary Wong",
        date: "12/18/2018",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
      },
      {
        id: 3,
        name: "Theodore Duncan",
        date: "11/15/2018",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
      },
    ],
  };

  addComment = (newComment) => {
    console.log(newComment);
    this.setState({ comments: [...this.state.comments, newComment] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Form addComment={this.addComment} />
        <div>
          {this.state.comments.reverse().map((item) => {
            return (
              <div>
                <hr></hr>
                <div>
                  <div></div>
                </div>
                <div>
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <p>{item.date}</p>
                  </div>
                </div>
                <p>{item.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
