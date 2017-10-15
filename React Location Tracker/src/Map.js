import React, { Component } from 'react';
import mapboxgl, { Layer, Feature } from "react-mapbox-gl";

class Map extends Component{
    constructor(props){
        super(props);
        this.state={
            loaded: false
        };
    }

    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoiamFja29saXZlcjEiLCJhIjoiY2l0MW16dGk4MDBhOTJ6bzMwdGk3a3ZiYyJ9.1kqTjPcjC9tbTXoZavar4A';
        var map = new mapboxgl.Map({
            container: this.refs.map,
            style: 'mapbox://styles/mapbox/light-v9',
            center: this.props.latLong,
            zoom: 12
        });
        this.map = map;
        this.setState({ loaded: true });
    }

    componentDidUpdate() {
        var latLong = this.props.latLong;
        var map = map.panTo(this.props.latLong, {
            zoom: 12,
            duration: 500
        });
        this.map = map;
    }

    render() {
        return(
            <div className="Map" id="map" data-loaded={this.state.loaded} ref="map">
                
            </div>
        );
    }
}

export default Map;