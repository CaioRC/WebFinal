import React from "react";

import Article from '../../components/article/Article'
import Comments from '../../components/comments/Comments'

import "./articlepage.css"


export default (props) => (
    <div className="articlePage">
        <Article key={props.match.params.id} id={props.match.params.id}/>
        <Comments key={props.match.params.id} id={props.match.params.id}/>
    </div>
);