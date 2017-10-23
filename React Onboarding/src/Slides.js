import React, { Component } from 'react';

class Slides extends Component{
    render() {
        return(
            <div className="Slides" data-step={this.props.step}>
                <div className="Wrapper">
                    Slides Component
                </div>
            </div>
        );
    }
}

export default Slides;