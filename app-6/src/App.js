import React, { Component } from "react";
import "./App.css";
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: '',
      taskList: [],
      renderedList: []
    }
    this.addTask = this.addTask.bind(this);
  }
  addTask(val) {
    let tasks = this.state.taskList;
    tasks.push(val);
    this.setState({taskList: tasks})
    
    let itit = 0;
    let listItems = this.state.taskList.map((item) => {
      return <p key={itit++}>{item}</p>
    })
    this.setState({renderedList: listItems})
  }
  render() {
    console.log(this.state.taskList);
    return (
      <div>

        <h1>My to-do list:</h1>

        <input onChange={e => this.setState({task: e.target.value})} />
        <button onClick={() => this.addTask(this.state.task)}>ADD</button>

        <Todo taskList={this.state.renderedList} />

      </div>
    );
  }
}

export default App;
