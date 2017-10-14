import React, { Component } from 'react';
import axios from 'axios';
import UI from './UI.js';
import './App.css';

class Location extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      city: '',
      country: '',
      latLong: [-74.258188,40.7053111]
    };
  }

  componentDidMount() {
    var that = this;
    axios.get("http://ip-api.com/json", function(data){
      let city = data.city;
      let country = data.country;
      let lat = data.lat;
      let lon = data.lon;

      let latLong = [lat, lon];

      this.setState({
        city: city,
        country: country,
        latLong: latLong
      });
    });
  }

  render() {
    let location = this.state.city + ', ' + this.state.country;
    return (
      <div className="Location">
        <UI status="active" locationName={location}/>
      </div>
    );
  }
}

export default Location;
