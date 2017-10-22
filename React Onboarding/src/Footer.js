import React, { Component } from 'react';

class Footer extends Component{
    render() {
        return(
            <div className="Footer" data-step={this.props.step}>
                <div className="Button Button--prev" onClick={this.props.decreaseStep}>
                    <i className="fa fa-fw fa-chevron-left" />
                </div>

                <div className="Dots" data-step={this.props.step}>
                    <div className="Dot" />
                    <div className="Dot" />
                    <div className="Dot" />
                </div>

                <div className="Button Button--next" onClick={this.props.increaseStep}>
                    <i className="fa fa-fw fa-chevron-right" />
                </div>

            </div>
        );
    }
}

export default Footer;