import React from "react";
import { Link } from "react-router-dom";

import "./topics.css";

import TopicItem from "../../components/topicitem/TopicItem";

import TOPICSDATA from "../../assets/TopicsData";



export default () => (

    <div className="topics">
        <h2>Tópicos</h2>
        <div className="topicsContent">{
            TOPICSDATA.topics.map(topicData =>
                <Link className="link" to={{
                    pathname: "/topic/" + topicData.url,
                    TopicName:  topicData.name
                }}
                >
                    <TopicItem name={topicData.name} imageUrl={topicData.imageUrl} />
                </Link>
            )

        }


        </div>
    </div>
);