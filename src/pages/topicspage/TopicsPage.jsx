import React, { Component } from "react";

import Trending from "../../components/trending/Trending";
import Feed from "../../components/feed/Feed";

import "./TopicsPage.css"

export default (props) => {
    console.log(props)
    return(
        <div className="topicPage">
            <h1 className="topicTitle">{
                props.location.TopicName ?
                    props.location.TopicName :
                    props.match.params.name}
            </h1>
            <Trending url={props.match.params.name}/>
            <Feed url={props.match.params.name}/>
        </div>
    )
};