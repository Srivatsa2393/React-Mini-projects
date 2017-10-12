import React, { Component } from 'react';

class Person extends Component{
    render() {
        return(
            <li className="Person">
                <div className="Image" style={{ backgroundImage: 'url(' + this.props.image + ')'}}></div>
                <div className="Name">{this.props.name}</div>
                <div className="Score">{this.props.score}</div>  
            </li>
        );
    }
}

export default Person;