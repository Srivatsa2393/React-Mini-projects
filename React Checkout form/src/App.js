import React, { Component } from 'react';
import './App.css';
import Overlay from './components/Overlay';
import Container from './components/Container';
import { CSSTransitionGroup } from 'react-transition-group' 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mounted: false,
      people: 1,
      price: 320.00,
      tax: 20,
      duration: 5,
      discount: 5
    };
  }


  render() {
    var overlay, container;

    if(this.state.mounted){
      overlay = (
        <Overlay img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg"/>
      );

      container = (
        <Container />
      );
    }
    return (
      <div className="App">
        <CSSTransitionGroup transitionName="overlay" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {overlay}
        </CSSTransitionGroup>

      </div>
    );
  }
}

export default App;
