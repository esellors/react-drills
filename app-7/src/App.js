import React, { Component } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
       taskArray: [],
    }
    this.newTaskCallback = this.newTaskCallback.bind(this);
  }
  newTaskCallback(e) {
    let tasks = this.state.taskArray.slice();
    tasks.push(e);
    this.setState({taskArray: tasks})
  }
  render() {
    console.log(this.state.taskArray)
    return (
      <div>
        <NewTask newTaskCallback={this.newTaskCallback} />
        <List taskArray={this.state.taskArray}/>
      </div>
    );
  }
}

export default App;
