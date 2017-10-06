import React, { Component } from 'react';
import Toggle from './Toggle'
import './App.css';

class Switch extends Component {
  constructor(props){
    super(props);
    this.state={
      time: 'night'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.state.time === 'night'){
      this.setState({ time: 'day' });
    }else{
      this.setState({ time: 'night' });
    }
  }

  render() {
    return (
      <div className="Switch" data-time={this.state.time}>
        <Toggle onClick={this.handleClick} time={this.state.time}/>
      </div>
    );
  }
}

export default Switch;
