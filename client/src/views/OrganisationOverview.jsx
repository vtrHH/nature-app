import { Component } from 'react';

import { listOfOrganisation } from '../services/organisation';
import OrganisationList from './../components/OrganisationList';

class OrganisationOverview extends Component {
  state = {
    organisations: []
  };

  async componentDidMount() {
    const organisations = await listOfOrganisation();
    this.setState({ organisations });
  }

  render() {
    let organisations = this.state.organisations;
    return (
      <main>
        <header>
          <h1>Check out our registered organisations</h1>
          <h2>
            Get all details about their location and great birds to see there
          </h2>
        </header>
        {organisations && (
          <div className="container--home">
            <OrganisationList organisations={organisations} />
          </div>
        )}
      </main>
    );
  }
}

export default OrganisationOverview;
