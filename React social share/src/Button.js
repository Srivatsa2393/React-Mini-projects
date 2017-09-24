import React, { Component } from 'react';

class Button extends Component{
    render(){
        const className = 'fa fa-fw fa-' + this.props.type;
        return(
            <a 
                href={this.props.url} 
                target="_blank" 
                className="Button" 
                data-type={this.props.type} 
                data-shares={this.props.shares}
            >
                <i className={className}></i>
                <span className="text">{this.props.type}</span>
            </a>
        );
    }   
};

export default Button;