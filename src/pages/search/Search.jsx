import React, { Component } from 'react';

import SearchArticle from "../../components/searchArticle/SearchArticle";

import "./Search.css"

class Search extends Component {
    constructor() {
        super()
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className="search">
                <SearchArticle search={this.props.location.state.search} />
            </div>
        )
    }
}


export default Search