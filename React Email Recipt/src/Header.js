import React, { Component } from 'react';
class Header extends Component{
    render() {
        return(
            <div className="Header">
                <div className="wrapper">
                    <h1>{this.props.text}</h1>
                </div>
        </div>
        );
    }
}

export default Header;