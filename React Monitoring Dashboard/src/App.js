import React, { Component } from 'react';
import Group from './Group';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          name: 'Mentions Today',
          value: 750
        },
        {
          name: 'Social Mentions',
          value: 243
        },
        {
          name: 'Positive Mentions0',
          value: 443
        }
      ]
    };
  }
  render() {

    let numbers = this.state.data.map((number, i) => {
      return <Group name={number.name} value={number.value} />
    })
    return (
      <div className="container">
        <div className="title">Mentions</div>
        <div className="content">
          {numbers}
        </div>
      </div>
    );
  }
}

export default App;
