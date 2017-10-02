import React, { Component } from 'react';
import './App.css';
import StatusIcon from './StatusIcon';

class App extends Component {
  render() {
    return (
      <div className="Message">
        <StatusIcon status="bad" />
        {this.props.message}
      </div>
    );
  }
}

export default App;
