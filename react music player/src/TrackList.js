import React, { Component } from 'react';
import data from './tracks.json';

class TrackList extends Component{
    components(props){
        super(props);
        this.state = {
            tracks: []
        };
        this.renderListItem = this.renderListItem.bind(this);
    }
    componentDidMount() {
        //fetching all the tracks 
        this.setState({ tracks: data.tracks });
    }

    renderListItem(track, i){
         
    }

    render(){
        let tracks = this.state.tracks.map(this.renderListItem);
        return(
            <ul className="TrackList">

            </ul>
        );
    }
}

export default TrackList;