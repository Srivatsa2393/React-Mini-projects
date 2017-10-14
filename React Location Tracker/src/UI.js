import React, { Component } from 'react';

class UI extends Component{
    constructor(props){
        super(props);
        this.state={
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({ loaded: true });
    }

    render() {
        return(
            <div className="UI" data-loaded={this.state.loaded}>
                <div className="Status">
                    Status:
                    <strong>{this.props.status}</strong>
                </div>
                <div className="LocationText">
                    Location:
                    <strong>{this.props.locationName}</strong>
                </div>
                <div className="Blip">
                </div>
            </div>
        );
    }
}

export default UI;