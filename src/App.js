import React, { Component } from 'react'
import Profile from './Component/Profile'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };


  render() {
    return (
      <div>
     {/* <Profile /> */}
     {/* <button onClick={ this.state.show? <Profile /> : null}>Show / Hide</button> */}
     {this.state.show ? <Profile /> : null}
        <button style={ { backgroundColor:(this.state.show) ? "turquoise":"pink"}} onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"}</button>
      </div>
    )
  }
}
 