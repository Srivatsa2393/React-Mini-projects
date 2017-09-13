import React, { Component } from 'react';
import Setting from './Setting';

class Settings extends Component{
    render() {
        return(
            <div className="Settings">
                <div className="MainWrapper">
                    <div className="Sidebar">

                        <div className="Title">Reactgram by Srivatsa</div>

                        <Setting />

                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;