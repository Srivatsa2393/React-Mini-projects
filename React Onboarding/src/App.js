import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      step: 1
    };
  }
  render() {
    return (
      <div className="App">
        <div className="Background" data-step={this.state.step}>

        </div>
      </div>
    );
  }
}

export default App;
