import React, { Component } from 'react';
import Search from './components/Search';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: ''
    };
  }


  render() {
    return (
      <div>
        <header>
          <Search filterVal={this.state.filterText} />
        </header>
      </div>
    );
  }
}

export default App;
