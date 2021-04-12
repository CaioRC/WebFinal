import React, { Component } from "react";

import FeedItem from '../feeditem/FeedItem';
import { getFeedSearch} from "../../Api"


import "./SearchArticle.css"

class SearchArticle extends Component {
    constructor() {
        super();
        this.state = {
            artigos: [],
        }
    }

    componentDidMount() {
        this.callApiFeed();
    }

    async callApiFeed() {
            const feedSearch = await getFeedSearch(this.props.search)
            this.setState({ artigos: feedSearch || [] })
    }
    render() {

        return (
            <div className="searchArticle">
                <div className="searchArticleContent">
                    <h2>Pesquisa</h2>
                    <div className="searchArticleItems">
                        {
                            this.state.artigos.length !== 0  ? this.state.artigos.map(artigosData =>
                                <FeedItem key={artigosData.id} {...artigosData} />
                            ) : <h3>Nenhum Artigo Encontrado.</h3>
                        }
                    </div>
                </div>
            </div>
        )
    }
}





export default SearchArticle;