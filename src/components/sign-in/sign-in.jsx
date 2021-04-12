import React, { Component } from "react";

import { connect } from 'react-redux';
import {setCurrentUser} from '../../redux/user/useAction';

import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";

import { signIn } from '../../Api'


import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email , password} = this.state;


    try{
      const  user  = await signIn( email, password);

      this.state = {
        email: "",
        password: ""
      };

      console.log(user)

      if(user){
        this.props.setCurrentUser(user.usuario)
        this.props.history.push('/')
      }else{
        alert("Usuário ou Senha Inválidos")
      }

    }catch(err){
      console.log(err)
    }

    
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Eu já tenho uma conta</h2>
        <span>Faça login com seu e-mail e senha</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="Senha"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type="submit">Logar</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: userCredentials => dispatch(setCurrentUser(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
