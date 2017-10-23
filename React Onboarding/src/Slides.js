import React, { Component } from 'react';
import Slide from './Slide';

class Slides extends Component{
    render() {
        return(
            <div className="Slides" data-step={this.props.step}>
                <div className="Wrapper">
                    <Slide text="The first step of onboarding, that is a thing." icon="comments-o" />
                    <Slide text="Second step of onboarding, showing the things." icon="calendar-plus-o" />
                    <Slide text="Final step of onboarding. Weeee, carousels!" icon="gears" />
                </div>
            </div>
        );
    }
}

export default Slides;