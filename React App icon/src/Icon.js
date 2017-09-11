import React, { Component } from 'react';
import WeatherIcon from './WeatherIcon';

class Icon extends Component{
    constructor(props){
        super(props);
            this.state={
                time: 1,
                location: '',
                temp: '',
                icon: '',
                weather_code: ''
            };
    }


    //whenever the component loads we must fetch IP and render it to the component
    //to fetch ip i have used freegeoip.net
    componentDidMount(){
        this.fetchIP();
    }

    //fetchIP to determine the IP
    fetchIP() {
        fetch('freegeoip.net/json/')
            .then((response) => {
                return response.json();
            })//fetching the city by using open weather sample
            .then((data) => {
                const city = data.city;
                this.fetchWeatherDate(city);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    

    render() {
        return(
            <div className="Icon" data-hour={this.state.time}>
                <div className="Sky">
                </div>
                
                <WeatherIcon />

                <div className="Information">

                    <div className="Location">{this.state.location}</div>

                    <div className="Temperature">{this.state.temp} &deg; F</div>
                </div>
            </div>
        );
    }
}

export default Icon;