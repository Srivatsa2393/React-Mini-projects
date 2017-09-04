import React, { Component } from 'react';
import Search from './components/Search';
import NamesList from './components/NamesList';
import ShortList from './components/ShortList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      favourites: []
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

        <main>

          <NamesList 
            data={this.props.data}
            filter={this.state.filterText}
            favourites={this.state.favourites}
          />

        </main>
      </div>
    );
  }
}

export default App;
