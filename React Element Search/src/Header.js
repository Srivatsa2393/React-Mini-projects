import React, { Component } from 'react';
import Search from './Search';

class Header extends Component{
    render() {
        return(
            <div className="Header">
                <Search handleSearchInput={this.props.handleSearchInput} />
            </div>
        );
    }
}

export default Header;