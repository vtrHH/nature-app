import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { signOut, verify } from './services/authentication';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import CreateObservation from './views/CreateObservation';
import SingleObservation from './views/SingleObservation';
import SingleBird from './views/SingleBird';
import IndividualProfile from './views/IndividualProfile';
import OrganisationProfile from './views/OrganisationProfile';
import Forum from './views/Forum';
import SinglePost from './views/SinglePost';
import CreatePost from './views/CreatePost';

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
    const user = this.state.user;
    return (
      <HelmetProvider>
        <BrowserRouter>
          <Helmet>
            <title>NatureApp</title>
          </Helmet>
          <Navbar user={user} onSignOut={this.handleSignOut} />
          {this.state.loaded && (
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
              <ProtectedRoute
                path="/observation/create"
                component={CreateObservation}
                authorized={user}
                redirect="/sign-up"
                exact
              />
              <ProtectedRoute
                path="/observation/:id"
                render={(props) => <SingleObservation {...props} user={user} />}
                authorized={user}
                redirect="/sign-up"
                exact
              />
              <Route
                path="/bird/:id"
                render={(props) => <SingleBird {...props} user={user} />}
                exact
              />
              <ProtectedRoute
                path="/individual/:id"
                component={IndividualProfile}
                exact
                authorized={user}
                redirect="/sign-up"
              />
              <Route
                path="/organisation/:id"
                component={OrganisationProfile}
                exact
              />

              <ProtectedRoute
                path="/forum"
                component={Forum}
                exact
                authorized={user}
                redirect="/sign-up"
              />
              <ProtectedRoute
                path="/forum/newpost"
                component={CreatePost}
                exact
                authorized={user}
                redirect="/sign-up"
              />
              <ProtectedRoute
                path="/forum/:id"
                component={SinglePost}
                exact
                authorized={user}
                redirect="/sign-up"
              />
            </Switch>
          )}
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}

export default App;
