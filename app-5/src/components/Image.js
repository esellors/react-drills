import React, { Component } from 'react';

export default class Image extends Component {
   render() {
      return (
         <div>

            <h1>hey</h1>
            <img src={this.props.image} />
            <caption>ERROR 404</caption>
            
         </div>
      );
   }
}