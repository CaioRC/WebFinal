import React, { Component } from "react";
import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import { signOut } from "../../redux/user/useAction";
import { withRouter } from "react-router-dom";

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

    onSearchSubmit = event =>{
        event.preventDefault()
        this.props.history.push({
            pathname:"/agora/search/" + this.state.search,
            state:{
                search: this.state.search
            }
        })
    }

    render(){
        const {search} = this.state
        return(
            <div className="header">
        <Link className="logo-container" to="/agora/">
            ÁGORA
           
        </Link>

        <form className="searchbar" onSubmit={event => this.onSearchSubmit(event)}>
            <div className="inputwrapper">
                <input type="text" name="search" placeholder="Procure artigos" value={search} onChange={this.handleChange}  />
                
                <button type='submit'  className="searchbutton">
                    <img src={Search} alt="Search Button"/>                
                </button>
            </div>            
        </form>

        <div className="options">
            <Link className="option" to="/agora/topics">
                Tópicos
            </Link>
            {this.props.currentUser ? (
                <React.Fragment>
                    <Link className="option" to={{
                        pathname: "/agora/write",
                        state: {
                            alterar: false,
                        }
                    }}>
                        Escreva
                    </Link>
                    <Link className="option" to={"/agora/usuario/" + this.props.currentUser.id} >
                        {this.props.currentUser.nome}
                    </Link>
                    <Link className="option" to="/agora/" onClick={this.props.signOut}>
                        Sair
                    </Link>

                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Link className="option" to="/agora/sign-in-up">
                        Logar
                    </Link>
                    <Link className="signUp" to="/agora/sign-in-up">
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
)( withRouter(Header));