import React, { Component } from 'react';

class Image extends Component{
    render() {
        return(
            <div 
                className="Image"
                style={{backgroundImage: 'url(' + this.props.image + ')'}}
            > 
                <div className="content">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.author}</h2>
                </div>
            </div>
        );
    }
}

export default Image;