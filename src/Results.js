
import React from 'react';
import './Search.css';


class SearchResults extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
    }

    render() {
        const resultsRender = this.props.results.map(element =>
            <div className="search-result" key={element.string} onClick={this.props.handleClick}>{element.string}</div>
        );
        return (
            <div className="SearchResults">
                {resultsRender}
            </div>
        );
    }
}

export default SearchResults;
