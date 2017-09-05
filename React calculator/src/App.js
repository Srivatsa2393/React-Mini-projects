import React, { Component } from 'react';
import './App.css';
//import Display from './Display';
import Buttons from './Buttons';
import Button from './Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      operations: []
    };
  }


  render() {
    return (
      <div className="App">
          {/*<Display data={this.state.operations} />*/}
        <Buttons>
          <Button />
        </Buttons>
      </div>
    );
  }
}

export default App;
