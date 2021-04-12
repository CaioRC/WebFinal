import React from 'react';

import "./TopicItem.css"

const TopicItem = ({ name, imageUrl }) => (
    <div className="TopicItem">
        <div className="backgroundImage"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="TopicItemContent">
                <h1 className="name">{name.toUpperCase()}</h1>
        </div>
    </div >
)

export default TopicItem;