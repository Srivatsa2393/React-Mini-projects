import React, { Component } from 'react';

/* const Title = (props) => {
    return(
        <div className="Title">
            {this.title}
        </div>
    );
}; */

class Title extends Component{
    render() {
        return(
            <div className="Title">
                {this.props.title}
            </div>
        );
    }
}

export default Title;