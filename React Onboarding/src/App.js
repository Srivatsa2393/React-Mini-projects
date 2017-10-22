import React, { Component } from 'react';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      step: 1
    };
  }

  increaseStep(){
    var step = this.state.step;
    step++;

    this.setState({ step: step });
  }

  decreaseStep(){
    var step = this.state.step;
    step--;

    this.setState({ step: step });
  }


  render() {
    return (
      <div className="App">
        <div className="Background" data-step={this.state.step}>
          <Footer increaseStep={this.increaseStep} decreaseStep={this.decreaseStep} step={this.state.step}/>
        </div>
      </div>
    );
  }
}

export default App;
