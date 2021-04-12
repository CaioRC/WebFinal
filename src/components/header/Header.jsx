import React, { Component } from "react";
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { signOut } from "../../redux/user/useAction";

import Search from '../../assets/search.svg'


import "./Header.css";


class Header extends Component{
    constructor(){
        super()

        this.state = {
            search : ""
        }
    }

    
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

    render(){
        const {search} = this.state
        return(
            <div className="header">
        <Link className="logo-container" to="/">
            ÁGORA
           
        </Link>

        <div className="searchbar">
            <input type="text" name="search" placeholder="Procure artigos" value={search} onChange={this.handleChange}  />
            
            <Link to={{
                pathname:"/search/" + this.state.search,
                state:{
                    search: this.state.search
                }
            }}>
            <input className="searchbutton" type="image" src={Search}></input>

            </Link>
        </div>

        <div className="options">
            <Link className="option" to="/topics">
                Tópicos
            </Link>
            {this.props.currentUser ? (
                <React.Fragment>
                    <Link className="option" to={{
                        pathname: "/write",
                        state: {
                            alterar: false,
                        }
                    }}>
                        Escreva
                    </Link>
                    <Link className="option" to={"/usuario/" + this.props.currentUser.id} >
                        {this.props.currentUser.nome}
                    </Link>
                    <Link className="option" to="/" onClick={this.props.signOut}>
                        Sair
                    </Link>

                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Link className="option" to="/sign-in-up">
                        Logar
                    </Link>
                    <Link className="signUp" to="/sign-in-up">
                        Cadastre-se
                    </Link>
                </React.Fragment>

            )}
        </div>
    </div>
        )
    }
}


const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
})

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);