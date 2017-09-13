import React, { Component } from 'react';
import Setting from './Setting';

class Settings extends Component{
constructor(props){
    super(props);
    this.state = {
        contrast: '100',
        hue: '0',
        brightness: '100',
        saturate: '100',
        sepia: 0
    };
}

handleChange(e){
    e.preventDefault();
}

    render() {
        return(
            <div className="Settings">
                <div className="MainWrapper">
                    <div className="Sidebar">

                        <div className="Title">Reactgram by Srivatsa</div>

                        <Setting name="contrast" value={this.state.contrast} onChange={this.handleChange}></Setting>
                        <Setting name="hue" value={this.state.hue} onChange={this.handleChange}></Setting>
                        <Setting name="brightness" value={this.state.brightness} onChange={this.handleChange}></Setting>
                        <Setting name="saturate" value={this.state.saturate} onChange={this.handleChange}></Setting>
                        <Setting name="sepia" value={this.state.sepia} onChange={this.handleChange}></Setting>

                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;