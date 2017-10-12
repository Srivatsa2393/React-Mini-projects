import React, { Component } from 'react';
import Title from './Title';
import LineChart from './LineChart';
import chartData from './data';

class App extends Component {
render() {
    return (
      <div className="Chart">
        <Title title="Views on React Daily UI Items"/>
        <LineChart data={chartData}/>
      </div>
    );
  }
}

export default App;
