import React from 'react';

import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";

import './App.css';
import './Fonts.css';

const axios = require('axios');

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      weather: '',
      fetching: false
    }
    this.getWeather = this.getWeather.bind(this);
  }


  getWeather(string) {
    this.setState({ fetching: true }, () => {
      axios.get('http://192.168.2.1:3000/weather/' + string).then((response) => {
        this.setState({ fetching: false }, () => {
          this.setState({ weather: JSON.stringify(response.data["0"]) });
        });
      }).catch(err => {
        console.log(err);
      });
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search getWeather={this.getWeather} />
        <Weather weather={this.state.weather} fetching={this.state.fetching} />
      </div>
    );
  }
}

export default App;
