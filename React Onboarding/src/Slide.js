import React, { Component } from 'react';

class Slide extends Component{
    render() {
        return(
            <div className="Slide">
                <i className={'fa fa-fw fa-' + this.props.icon} />
                <div className="Text">{this.props.text}</div>
            </div>
        )
    }
}

export default Slide;