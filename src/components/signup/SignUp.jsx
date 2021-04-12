import React, { Component } from "react";

import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/useAction';

import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";

import { signUp } from '../../Api'


import "./SignUp.styles.css";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("As senhas não são iguais");
      return;
    }

    try {
      const user = await signUp(displayName, email, password);

      

      if (user) {
        this.props.setCurrentUser(user.usuario)
        this.props.history.push('/')
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        })
      }else{
        alert("Email já cadastrado. Por Favor utilize outro")

        this.setState({
          email: "",
          password: "",
          confirmPassword: ""
        })
      }


    } catch (err) {
      console.log(err)
    }


  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Eu não tenho uma conta ainda</h2>
        <span>Cadastre-se com o seu email e senha</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Nick"
            maxLength="10"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Senha"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirmar Senha"
            required
          />
          <CustomButton type="submit">CADASTRAR-SE</CustomButton>
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
)(SignUp);
