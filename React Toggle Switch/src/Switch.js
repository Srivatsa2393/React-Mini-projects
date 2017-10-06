import React, { Component } from 'react';
import './App.css';

class Switch extends Component {
  constructor(props){
    super(props);
    this.state={
      time: 'night'
    };
  }

  render() {
    return (
      <div className="Switch" data-time={this.state.time}>
        Switch Component
      </div>
    );
  }
}

export default Switch;
