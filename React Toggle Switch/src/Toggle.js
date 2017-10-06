import React, { Component } from 'react';
import Button from './Button';

class Toggle extends Component{
    render() {
        return(
            <div className="Toggle" onClick={this.props.onClick} data-time={this.props.time}>
                <Button />
            </div>
        )
    }
} 

export default Toggle;