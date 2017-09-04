import React, { Component } from 'react';

class Search extends Component{
    render() {
        const { filterVal, filterUpdate } = this.props;
        return(
                <form>
                    <input 
                        type="text"
                        placeholder="Type to filter.."
                        ref='filterInput'
                        value={filterVal}
                        onChange={() => {
                            filterUpdate(this.refs.filterInput.value)
                        }}
                    />
                </form>
        );
    }
}

export default Search;