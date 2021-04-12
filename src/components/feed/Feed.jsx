import React, { Component } from "react";

import FeedItem from '../feeditem/FeedItem';
import { getFeed, getFeedTopic } from "../../Api"


import "./Feed.css"

class Feed extends Component {
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

        if (this.props.url) {
            const feedTopic = await getFeedTopic(this.props.url)
            this.setState({ artigos: feedTopic || [] })
        } else {
            const feed = await getFeed()
            this.setState({ artigos: feed || [] })
        }
    }
    render() {

        return (
            <div className="feed">
                <div className="feedContent">

                    <h2>Feed</h2>
                    <div className="feedItems">
                        {
                            this.state.artigos ? this.state.artigos.map(artigosData =>
                                <FeedItem key={artigosData.id} {...artigosData} />
                            ) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}





export default Feed;