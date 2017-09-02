import React, { Component } from 'react';

class Input extends Component{
    render() {
        return(
            <div className="Input">
                <input 
                    id={this.props.id} 
                    type={this.props.type}
                    autoComplete="false"
                    required
                    placeholder={this.props.placeholder}
                />
                <label htmlFor={this.props.id}></label>
            </div>
        );
    }
}

export default Input;