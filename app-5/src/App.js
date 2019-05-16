import React, { Component } from "react";
import "./App.css";
import Image from './components/Image';

class App extends Component {
  constructor() {
    super();
    this.state = {
      image: "https://via.placeholder.com/300X150"
    }
  }
  render() {
    return (
      <div>

        <Image image={this.state.image} />

      </div>
    );
  }
}

export default App;
