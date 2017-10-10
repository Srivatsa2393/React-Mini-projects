import React, { Component } from 'react';
import Order from './Order';

class Content extends Component{
    render() {
        return(
            <div className="Content">
                <div className="wrapper">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.body}</p>
                    <Order />
                </div>
            </div>
        );
    }
}

export default Content;