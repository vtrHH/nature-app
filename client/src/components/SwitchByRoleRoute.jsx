import { Route, Redirect } from 'react-router-dom';
import OrganisationHome from './../views/Organisations/OrganisationHome';

const SwitchByRoleRoute = ({ individual, redirect, ...props }) => {
  if (individual) {
    return <Route {...props} />;
  } else {
    return <Redirect to={OrganisationHome} />;
  }
};

// const ProtectedRoute = ({ authorized, redirect, ...props }) =>
//   authorized ? <Route {...props} /> : <Redirect to={redirect} />;

export default SwitchByRoleRoute;
