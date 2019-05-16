import React, {Component} from 'react';

export default class Login extends Component {
   constructor() {
      super();
      this.state = {
         userName: '',
         userPW: ''
      }
   }
   render () {
      // console.log(this.state.userName);
      // console.log(this.state.userPW);
      return (
         <div>
            <input onChange={(e) => {
               this.setState({userName: e.target.value})
            }} />
             <input onChange={(e) => {
               this.setState({userPW: e.target.value})
            }} />
            <button onClick={ () => alert(`Username: ${this.state.userName}, Password: ${this.state.userPW}`)}>Login</button>
         </div>
      );
   }
}