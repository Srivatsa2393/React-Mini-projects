import React, { Component } from 'react';

class Overlay extends Component{
    render() {
        return(
            <div className="Overlay" style={{'backgroundImage': 'url(' + this.props.image + ')'}}>
                Something
            </div>
        );
    }
}

export default Overlay;