import React, { Component } from 'react';

class Content extends Component{
    render() {
        return(
            <div className="Content">
                <div className="wrapper">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}

export default Content;