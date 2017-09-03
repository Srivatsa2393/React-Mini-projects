import React, { Component } from 'react';
import './App.css';
import Overlay from './components/Overlay';

class App extends Component {
 


  render() {
    return (
      <div className="App">
        <Overlay img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg"/>
      </div>
    );
  }
}

export default App;
