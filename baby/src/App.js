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

  //add the favourite name from the id to favorites array
  addFavourites(id){
    const newSet = this.state.favourites.concat([id]);
    this.setState({ favourites: newSet });
  }


  render() {
    const hasSearch = this.state.filterText.length > 0;

    return (
      <div>
        <header>
          <Search 
            filterVal={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)} 
          />
        </header>

        <main>

          <ShortList 
            data={this.props.data}
            favourites={this.state.favourites}
           
          />

          <NamesList 
            data={this.props.data}
            filter={this.state.filterText}
            favourites={this.state.favourites}
            addFavourites={this.addFavourites.bind(this)}
          />
          {/* Show only if user has typed in search. To reset the input field we pass an empty value to the filter update method */}
          { hasSearch && 
            <button 
              onClick={this.filterUpdate.bind(this, '')}>
              Clear Search
            </button>
          }
        </main>
      </div>
    );
  }
}

export default App;
