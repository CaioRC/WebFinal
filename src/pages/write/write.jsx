import React from 'react';

import ArticleWrite from '../../components/articlewrite/ArticleWrite'

import './write.css';

const SigninAndSignOut = ( props) => (
  <div className="write">
    <h1>Escreva</h1>
    <ArticleWrite {...props}/>
  </div>
);

export default SigninAndSignOut;
