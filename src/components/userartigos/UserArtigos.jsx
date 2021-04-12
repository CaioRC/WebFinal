import React, { Component } from "react";

import UserArtigosItem from '../userartigositems/UserArtigosItem';

import { getUserArticleByID } from "../../Api"


import "./UserArtigos.css"

class UserArtigos extends Component {
    constructor() {
        super();
        this.state = {
            artigos: []
        }
    }

    componentDidMount() {
        this.callApiUserArticles();
    }

    async callApiUserArticles() {
        const userArtigos = await getUserArticleByID(this.props.id)
        this.setState({ artigos: userArtigos || [] })
    }
    
    render() {
        return (
            <div className="userartigos">
                <div className="userartigosContent">
                    <h2>Artigos do Usuário</h2>
                    <div className="userartigosItems">
                        {
                            this.state.artigos ? this.state.artigos.map(artigosData =>
                                <UserArtigosItem key={artigosData.id} {...artigosData} callApi= {this.callApiUserArticles} />
                            ) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}





export default UserArtigos;