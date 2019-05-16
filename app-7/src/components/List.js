import React, { Component } from 'react';
import Todo from './Todo';

export default class List extends Component {
  render() {

    let listArray = this.props.taskArray.map((el, i) => {
      return <Todo key={i} taskItem={el} />

    })
      return (
         <div>
           {listArray}
         </div>
      );
   }
}