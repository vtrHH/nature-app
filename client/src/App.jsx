import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async';
// import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <HelmetProvider>
        <BrowserRouter>
          <Helmet>
            <title>NatureApp</title>
          </Helmet>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}

export default App;
