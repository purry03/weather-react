
import React from 'react';
import './Weather.css';

import loading from './loading.gif';

class Weather extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        let weather = null;
        if (this.props.weather.length > 0) {
            weather = JSON.parse(this.props.weather);
            console.log(weather);
        }
        return (
            <div className="Weather">
                <div className="current">
                    {(this.props.fetching && <div className="loading">
                        <img src={loading} alt="loading animation"></img>
                    </div>)}


                    <h1 className="temp">{(!!(weather) ? weather.current.temperature : "-- ")}°</h1>
                    <div className="details location">
                        <h3>{(!!(weather) ? weather.location.name : "-- ")}</h3>
                        <h4>{(!!(weather) ? weather.current.skytext : "-- ")}</h4>
                        <h5 className="last-updated">Last Updated : {(!!(weather) ? weather.current.observationtime : "-- ")}</h5>
                    </div>
                    <div className="details">
                        <h4>Windspeed : {(!!(weather) ? weather.current.winddisplay : "-- ")}</h4>
                        <h4>Humidity : {(!!(weather) ? weather.current.humidity : "-- ")}%</h4>
                    </div>
                </div>
            </div>
        );
    }
}


Weather.defaultProps = {
    weather: "{}"
}

export default Weather;
