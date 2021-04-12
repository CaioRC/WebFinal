import React, { Component } from "react";


import TRENDINGDATA from "../../assets/WrittenData"

import TrendingItem from "../trendingitem/TrendingItem";
import { getTrending, getTrendingTopic } from "../../Api"

import "./Trending.css"

//to do: Fazer tela de loading

class Trending extends Component {
    constructor() {
        super();
        this.state = {
            artigos: [],
        }
    }

    componentDidMount() {
        this.callApiTrending();

    }

    async callApiTrending() {
        if (this.props.url) {
            try{
                const trendingTopic = await getTrendingTopic(this.props.url)
            console.log("AQUI")
            this.setState({ artigos: trendingTopic })
            }catch(err){
                this.setState({ artigos: [] })
            }
        } else {
            const trending = await getTrending()
            this.setState({ artigos: trending })
            console.log(trending)
        }
    }

    render() {
        return (
            <div className="trending">
                <div className="trendingContent">
                    <h2>Trending</h2>
                    <div className="trendingItems">
                        {
                            this.state.artigos ? this.state.artigos.map(artigosData =>
                                <TrendingItem key={artigosData.id}{...artigosData} />
                            ): null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Trending;
