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

    //helper method to detrmine the city using the open weather samples api
    fetchWeatherDate(city){
        const url = `http://api.openweathermap.org`;
        const path = `/data/2.5/weather`;
        const appId = `c417ba710ad7596d28ee66adbfdef103`;
        const query = `units=imperial&appid=${appId}`;

        fetch(`${url}${path}?q=${city}&${query}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let date = new Date();
                let time = date.getHours();
                this.setState({
                    time: time,
                    location: city,
                    temp: Math.round(data.main.temp),
                    weather_code: data.weather[0].id
                })
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
                
                <WeatherIcon src={this.state.icon} weatherCode={this.state.weather_code} timeOfDay={this.state.time} />

                <div className="Information">

                    <div className="Location">{this.state.location}</div>

                    <div className="Temperature">{this.state.temp} &deg; F</div>
                </div>
            </div>
        );
    }
}

export default Icon;