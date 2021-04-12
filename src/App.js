import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/HomePage";

import Header from "./components/header/Header";
import Topics from "./pages/topics/Topics";
import TopicsPage from "./pages/topicspage/TopicsPage";
import SignInUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import articlepage from "./pages/articlepage/articlepage";
import Write from "./pages/write/write";
import Perfil from './pages/perfil/Perfil';
import Search from './pages/search/Search'

class App extends Component {
  render() {
    return (
      <div>
        <Header currentUser={false}/>
        <Switch>
          <Route exact path="/agora/" component={HomePage}/>
          <Route path="/agora/topics" component={Topics}/>
          <Route path="/agora/topic/:name" component={TopicsPage}/>
          <Route path="/agora/sign-in-up" component={SignInUp}/>
          <Route path="/agora/artigo/:id" component={articlepage}/>
          <Route path="/agora/write" component={props => <Write  {...props}/>}/>
          <Route path="/agora/usuario/:id" component={props => <Perfil key={props.match.params.id} {...props}/>}/>
          <Route path="/agora/search/:search" component={props => <Search key={props.match.params.search} {...props}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
