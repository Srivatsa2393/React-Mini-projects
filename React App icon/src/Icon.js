import React, { Component } from 'react';

class Icon extends Component{
    constructor(props){
        super(props){
            this.state={
                time: 1,
                location: '',
                temp: ''
            };
        }
    }
    render() {
        return(
            <div className="Icon" data-hour={this.state.time}>
                <div className="Sky">
                </div>

                <div className="Information">

                    <div className="Location">{this.state.location}</div>

                    <div className="Temperature">{this.state.temp} &deg; F</div>
                </div>
            </div>
        );
    }
}

export default Icon;