import React, { Component } from 'react';

class Search extends Component{
    render() {
        return(
            <div className="Search">
                <input 
                    type="text" 
                    placeholder="Type to search..." 
                    className="SearchField" 
                    onKeyUp={this.props.handleSearchInput} 
                />
            </div>
        );
    }
}

export default Search;