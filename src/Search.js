
import React from 'react';
import './Search.css';

import SearchResults from './Results';

const axios = require('axios');


class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            results: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateResults = this.updateResults.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value }, () => {
            if (this.state.value.trim().length === 0) {
                this.setState({ results: [] });
            }
            axios.get('http://192.168.2.1:3000/search/' + this.state.value)
                .then(response => {
                    this.updateResults(response);
                }).catch(error => {
                    //pass
                })
        });
    }


    handleClick(event) {
        this.setState({ results: [] });
        this.props.getWeather(event.target.innerText);
    }

    updateResults(response) {
        this.setState({ results: response.data });
    }

    render() {
        return (
            <div className="Search">
                <div className="input-wrapper">
                    <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Search by city name..." spellCheck="false" />
                </div>
                <div className="search-wrapper">
                    <SearchResults results={this.state.results} handleClick={this.handleClick} />
                </div>
            </div>
        );
    }
}

export default Search;
