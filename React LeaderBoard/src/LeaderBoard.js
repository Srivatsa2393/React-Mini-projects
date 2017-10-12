import React, { Component } from 'react';
import data from './data';
import './App.css';

class LeaderBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {data}
    };
  }
  render() {
    return (
      <div className="LeaderBoard">
        LeaderBoard component
      </div>
    );
  }
}

export default LeaderBoard;
