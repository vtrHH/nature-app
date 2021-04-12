import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { signOut, verify } from './services/authentication';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import CreateBird from './views/CreateBird';
import IndividualProfile from './views/IndividualProfile';
import OrganisationProfile from './views/OrganisationProfile';

class App extends Component {
  state = {
    user: null,
    loaded: false
  };

  async componentDidMount() {
    const user = await verify();
    console.log(user);
    this.handleUserChange(user);
    this.setState({ loaded: true });
  }

  handleUserChange = (user) => {
    this.setState({ user });
  };

  handleSignOut = async () => {
    await signOut();
    this.handleUserChange(null);
  };

  render() {
    let user = this.state.user;
    return (
      <HelmetProvider>
        <BrowserRouter>
          <Helmet>
            <title>NatureApp</title>
          </Helmet>
          <Navbar user={user} onSignOut={this.handleSignOut} />
          <Switch>
            <Route
              path="/"
              render={(props) => <Home {...props} user={user} />}
              exact
            />
            <ProtectedRoute
              path="/sign-in"
              render={(props) => (
                <SignIn {...props} onUserChange={this.handleUserChange} />
              )}
              authorized={!user}
              redirect="/"
              exact
            />
            <ProtectedRoute
              path="/sign-up"
              render={(props) => (
                <SignUp {...props} onUserChange={this.handleUserChange} />
              )}
              authorized={!user}
              redirect="/"
              exact
            />
            <Route path="/individual/:id" component={IndividualProfile} exact />
            <Route
              path="/organisation/:id"
              component={OrganisationProfile}
              exact
            />
            <Route path="/bird/create" component={CreateBird} exact />
          </Switch>
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}

export default App;
