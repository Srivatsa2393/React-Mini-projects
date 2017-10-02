import React, { Component } from 'react';
import './App.css';
import StatusIcon from './StatusIcon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatusIcon />
        {this.props.message}
      </div>
    );
  }
}

export default App;
