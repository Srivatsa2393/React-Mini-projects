import React, { Component } from 'react';
import TrackList from './TrackList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: false,
      currentTrackIndex: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div 
          className="Artwork"
          style={{ backgroundImage:  'url(' + data.artwork + ')'}}
        >
          <Controls onClick={this.handleClick} playing={this.state.playing} />
        </div>
      </div>
    );
  }
}

export default App;
