import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/signup/SignUp';

import './sign-in-sign-up.styles.scss';

const SigninAndSignOut = ( props) => (
  <div className="sign-in-and-sign-out">
    <SignIn {...props} />
    <SignUp {...props}/>
  </div>
);

export default SigninAndSignOut;
