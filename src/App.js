import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard"
import albums from "./albums.json";
import "./App.css";

function randomize(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends React.Component {
  state = {
    albums: albums,
    score: 0,
    hiScore: 0,
    clicked: [],
    status: "Album Art Clicky Game"
  }

  Albums = () => this.state.albums.map((albums) => {
    return (
      <FriendCard
        image={albums.image}
        id={albums.id}
        key={albums.id}
        handleRandomize={this.handleRandomize}
        handleClick={this.handleClick}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
      />
    )
  });

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      status: "Don't Forget What You Clicked"
    });
    if (newScore >= this.state.hiScore) {
      this.setState({ hiScore: newScore });
    }
    if (newScore === 12) {
      this.setState({ status: "You Rock!! Click Any Image To Restart!" });
    }
    this.handleRandomize();
  };

  handleReset = () => {
    if (this.state.score === 12) {
      this.setState({
        score: 0,
        hiScore: this.state.hiScore,
        clicked: [],
        status: "Don't Forget What You Clicked"
      })
    }
    else {
      this.setState({
        score: 0,
        hiScore: this.state.hiScore,
        clicked: [],
        status: "You lose!"
      });
    }
    this.handleRandomize();
  };

  handleRandomize = () => {
    let randomizeAlbums = randomize(albums);
    this.setState({ albums: randomizeAlbums });
  };

  render() {
    return (
      <div>
        <Scoreboard
          score={this.state.score}
          hiScore={this.state.hiScore}
          status={this.state.status} />
        <div className="container">
          <Wrapper>
            {this.Albums()}
          </Wrapper>
        </div>
      </div>
    )
  }
}
export default App;


