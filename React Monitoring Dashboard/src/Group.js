import React, { Component } from 'react';

class Group extends Component{
    render() {
        return(
            <div className="group">
                <div className="numbers">{this.props.value}</div>
                <div className="label">{this.props.name}</div>
            </div>
        );
    }
}

export default Group;