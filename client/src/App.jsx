import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { signOut, verify } from './services/authentication';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';

import { Container } from 'react-bootstrap';

import Home from './views/Home';
import LandingPage from './views/LandingPage';
import ErrorView from './views/ErrorView';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import CreateObservation from './views/CreateObservation';
import SingleObservation from './views/SingleObservation';
import SingleBird from './views/SingleBird';
import IndividualProfile from './views/IndividualProfile';
import UpdateIndividualProfile from './views/UpdateIndividualProfile';
import DeletePost from './views/DeletePost';
import DeleteObservation from './views/DeleteObservation';
import ConvertPost from './views/ConvertPost';

import OrganisationProfile from './views/Organisations/OrganisationProfile';
import OrganisationHome from './views/Organisations/OrganisationHome';
import UpdateOrganisationProfile from './views/Organisations/UpdateOrganisationProfile';
import OrganisationOverview from './views/OrganisationOverview';
import AddBirds from './views/Organisations/AddBirds';
import AddPictures from './views/Organisations/AddPictures';
import GetInspired from './views/GetInspired';

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
          <Container fluid>
            <Header user={user} onSignOut={this.handleSignOut} />
          </Container>
          {this.state.loaded && (
            <Switch>
              {user && user.role === 'individual' ? (
                <Route
                  path="/"
                  render={(props) => <Home {...props} user={user} />}
                  exact
                />
              ) : user && user.role === 'organisation' ? (
                <Route
                  path="/"
                  render={(props) => (
                    <OrganisationHome {...props} user={user} />
                  )}
                  exact
                />
              ) : (
                <Route path="/" component={LandingPage} exact />
              )}
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

              <ProtectedRoute
                path="/observation/:id/delete"
                render={(props) => <DeleteObservation {...props} user={user} />}
                exact
                authorized={user}
                redirect="/sign-up"
              />

              <Route
                path="/bird/:id"
                render={(props) => <SingleBird {...props} user={user} />}
                exact
              />

              <ProtectedRoute
                path="/individual/:id"
                render={(props) => <IndividualProfile {...props} user={user} />}
                exact
                authorized={user}
                redirect="/sign-up"
              />

              <ProtectedRoute
                path="/individual/:id/edit"
                render={(props) => (
                  <UpdateIndividualProfile {...props} user={user} />
                )}
                exact
                authorized={user}
                redirect="/sign-up"
              />

              <ProtectedRoute
                path="/organisations"
                component={OrganisationOverview}
                exact
                authorized={user}
                redirect="/sign-up"
              />

              <Route
                path="/organisation/:id"
                component={OrganisationProfile}
                exact
              />

              <Route path="/get-inspired" component={GetInspired} exact />

              <ProtectedRoute
                path="/organisation/:id/edit"
                render={(props) => (
                  <UpdateOrganisationProfile {...props} user={user} />
                )}
                authorized={user && user.role === 'organisation'}
                redirect="/sign-up"
                exact
              />

              <ProtectedRoute
                path="/organisation/:id/add-birds"
                render={(props) => <AddBirds {...props} user={user} />}
                authorized={user && user.role === 'organisation'}
                redirect="/sign-up"
                exact
              />

              <ProtectedRoute
                path="/organisation/:id/add-pictures"
                render={(props) => <AddPictures {...props} user={user} />}
                authorized={user && user.role === 'organisation'}
                redirect="/sign-up"
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
                path="/forum/:id/delete"
                render={(props) => <DeletePost {...props} user={user} />}
                exact
                authorized={user}
                redirect="/sign-up"
              />

              <ProtectedRoute
                path="/forum/:id/convert"
                render={(props) => <ConvertPost {...props} user={user} />}
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
                render={(props) => <SinglePost {...props} user={user} />}
                exact
                authorized={user}
                redirect="/sign-up"
              />
              <Route path="/error" component={ErrorView} />
              <Redirect to="/error" />
            </Switch>
          )}
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}

export default App;
