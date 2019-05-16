import React, { Component } from 'react';

export default class NewTask extends Component {
   constructor() {
      super();
      this.state = {
         taskItem: ''
      }
   }
   render() {
      return (
         <div>
           <h1>My to-do list:</h1>
           <input onChange={(e) => this.setState({taskItem: e.target.value})} />
           <button onClick={() => this.props.newTaskCallback(this.state.taskItem)}>click me</button>
         </div>
      );
   }
}