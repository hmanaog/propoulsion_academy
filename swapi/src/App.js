import React from "react";
import Films from "./Components/Films/Films";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  render() {
    console.log("inside this.state ", this.state.films);
    return (
      <div>
        hello
        <Films films={this.state.films} />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://swapi.co/api/films/").then(response => {
      response.json().then(filmData => {
        console.log(filmData.results);
        this.setState({
          films: filmData.results
        });
      });
    });
  }
}

export default App;
