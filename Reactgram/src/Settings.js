import React, { Component } from 'react';
import Setting from './Setting';
import Filter from './Filter';
import Image from './Image';

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

handleChange = (e) => {
    //e.preventDefault();
    let filter = e.target.id;
    let value= e.target.value;

    this.setState((prevState, props) => {
        prevState[filter] = value;
        return prevState;
    });
};

updateSettings = (nextFilterState) => {
    this.setState(nextFilterState);
}

    render() {
        return(
            <div className="Settings">
                <div className="MainWrapper">
                    <div className="Sidebar">

                        <div className="Title">Reactgram by Srivatsa</div>

                        <Setting name="contrast" min={0} max={200} value={this.state.contrast} onChange={this.handleChange}></Setting>
                        <Setting name="hue" min={-360} max={360} value={this.state.hue} onChange={this.handleChange}></Setting>
                        <Setting name="brightness" min={0} max={200} value={this.state.brightness} onChange={this.handleChange}></Setting>
                        <Setting name="saturate" min={0} max={100} value={this.state.saturate} onChange={this.handleChange}></Setting>
                        <Setting name="sepia" min={0} max={100} value={this.state.sepia} onChange={this.handleChange}></Setting>
                    </div>
                    <div className="ImageContainer">
                        <Filter key="Default" filterFunctions={this.state}>
                            <Image image={this.props.image}/>
                        </Filter>
                    </div>
                </div>

                <div className="FilterList">
                    <Filter 
                        key="Noir" 
                        filterFunctions={{'contrast':138, 'hue':0, 'brightness':122, 'saturate':0, 'sepia':0}}
                        onClick={this.updateSettings}
                    >
                        <Image image={this.props.image} />
                    </Filter>


                    <Filter 
                        key="Aged" 
                        filterFunctions={{'contrast':94, 'hue':-54, 'brightness':92, 'saturate':100, 'sepia':44}}
                        onClick={this.updateSettings}
                    >
                        <Image image={this.props.image} />
                    </Filter>


                    <Filter 
                        key="Whiteout" 
                        filterFunctions={{'contrast':32, 'hue':0, 'brightness':173, 'saturate':0, 'sepia':0}}
                        onClick={this.updateSettings}
                    >
                        <Image image={this.props.image} />
                    </Filter>

                    <Filter 
                        key="Vintage" 
                        filterFunctions={{'contrast':164, 'hue':0, 'brightness':47, 'saturate':0, 'sepia':100}}
                        onClick={this.updateSettings}
                    >
                        <Image image={this.props.image} />
                    </Filter>

                
                </div>
            </div>
        );
    }
}

export default Settings;