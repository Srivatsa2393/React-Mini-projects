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

  handleClick(e){
    switch(e.target.id){
      case "play":
        this.setState((state, props) => {
          let currentTrackIndex = state.currentTrackIndex;
          if (currentTrackIndex === 0){
            currentTrackIndex = 1;
          }
          return{
            playing: true,
            currentTrackIndex: currentTrackIndex
          }
        });
        break;
      
      case "pause":
    }
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
