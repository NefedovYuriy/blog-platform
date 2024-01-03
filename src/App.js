import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ArticleForm, ArticleItemFull, ArticleList, Header, Profile, SignIn, SignUp } from './components/index.js';
import { PrivateRoute } from './utilities/privateRoute';

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route exact path="/articles" component={ArticleList} />
        <Route exact path="/articles/:slug" component={ArticleItemFull} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/new-article" component={ArticleForm} />
        <PrivateRoute exact path="/articles/:slug/edit" component={ArticleForm} />
      </Switch>
    </Router>
  );
};
