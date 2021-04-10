import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { signOut, verify } from './services/authentication';

import { Helmet, HelmetProvider } from 'react-helmet-async';
// import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import CreateBird from './views/CreateBird';

class App extends Component {

  state = {
    user: null,
    loaded: false
  };

  async componentDidMount() {
    const user = await verify();
    this.handleUserChange(user);
    this.setState({ loaded: true });
  }

  handleUserChange = user => {
    this.setState({ user });
  };

  handleSignOut = async () => {
    await signOut();
    this.handleUserChange(null);
  };

  render() {
    return (
     
      <HelmetProvider>
        <BrowserRouter>
          <Helmet>
            <title>NatureApp</title>
          </Helmet>
          <Navbar/>
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/sign-in" component={SignIn} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/bird/create" component={CreateBird} exact />
          {/* <ProtectedRoute
                path="/sign-in"
                render={props => (
                  <SignIn {...props} onUserChange={this.handleUserChange} />
                )}
                authorized={!user}
                redirect="/"
                exact
              />
              <ProtectedRoute
                path="/sign-up"
                render={props => (
                  <SignUp {...props} onUserChange={this.handleUserChange} />
                )}
                authorized={!user}
                redirect="/"
                exact
              /> */}
          </Switch>

        </BrowserRouter>
      </HelmetProvider>

    )
  }
}

export default App
