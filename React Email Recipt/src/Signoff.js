import React, { Component } from 'react';

class Signoff extends Component{
    render() {
        return(
            <div>
                <div className="signoff">Srivatsa</div>
                <a className="sitelink" href={this.props.link} target="_blank">{this.props.label}</a>
            </div>
        );
    }
}

export default Signoff;