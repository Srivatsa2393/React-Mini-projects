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

  //removre from id from the favourites array
  deleteFavourites(id){
    const { favourites } = this.state
    const newList = [
      ...favourites.slice(0, id),
      ...favourites.slice(id + 1)
    ]

    this.setState({ favourites: newList });
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
            deleteFavourites={this.deleteFavourites.bind(this)}
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

          <footer className="credit">
            Source for obtaining the list of names of babies: 
              <a href="https://www.yahoo.com/parenting/atticus-tops-baby-names-2015-124073377716.html" target="_blank">
                Top Baby Names in 2017
              </a> 
          </footer>


        </main>
      </div>
    );
  }
}

export default App;
