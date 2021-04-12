import React from "react";

import { connect } from 'react-redux';

import Welcome from "../../components/welcome/Welcome";
import Trending from "../../components/trending/Trending";
import Feed from "../../components/feed/Feed";

import "./Homepage.css"

const HomePage = ({ currentUser }) => (
    <div className="homepage">
        {!currentUser ?
            <Welcome /> :
            null}

        <Trending />
        <Feed />
    </div>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
})

export default connect(
    mapStateToProps
)(HomePage);

