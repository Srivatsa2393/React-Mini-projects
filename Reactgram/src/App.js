import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Settings from './Settings';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      image: 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg'
    };
  }
  render() {
    return (
      <div className="App">
        <div className="ImageBG" style={{backgroundImage: 'url('+ this.state.image + ')'}}>
        </div>
        <Settings image={this.state.image} />
      </div>
    );
  }
}

export default App;
