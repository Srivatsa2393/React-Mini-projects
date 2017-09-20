import React, { Component } from 'react';
import TrackList from './TrackList';
import data from './tracks.json';
import Controls from './Controls';
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
          }else{
            return{
              playing: true,
              currentTrackIndex: currentTrackIndex
            };
          }
        });
        break;
      
      case "pause":
        this.setState({ playing: false});
        break;

      case "prev":
        this.setState((state, props) => {
          let currentIndex = state.currentTrackIndex - 1;
          if(currentIndex <= 0){
            return null;
          }else{
            return {
              playing: true,
              currentTrackIndex: currentIndex
            };
          }
        });
        break;

      case "next":
        this.setState((state, props) => {
          let currentIndex = state.currentTrackIndex + 1;
          if(currentIndex > data.tracks.length){
            return null;
          }else{
            return{
              playing: true,
              currentTrackIndex: currentIndex
            };
          }
        });
        break;

      default:
        break;
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
