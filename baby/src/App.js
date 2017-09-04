import React, { Component } from 'react';
import Search from './components/Search';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: ''
    };
  }

  //update the filterText when user types
  filterUpdate(value){
    this.setState({ filterText: value });
  }


  render() {
    return (
      <div>
        <header>
          <Search 
            filterVal={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)} 
          />
        </header>
      </div>
    );
  }
}

export default App;
