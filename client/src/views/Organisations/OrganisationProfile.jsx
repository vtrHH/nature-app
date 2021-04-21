import { Component } from 'react';

import { loadOrganisation } from '../../services/organisation';

class OrganisationProfile extends Component {
  state = {
    organisation: null
  };

  async componentDidMount() {
    const { organisation } = await loadOrganisation(this.props.match.params.id);
    this.setState({ organisation });
    console.log(this.state);
  }

  render() {
    const organisation = this.state.organisation;
    return (
      <main>
        {organisation && (
          <>
            <header>Your Profile</header>
            <img
              src={organisation.profilePicture}
              alt={organisation.name}
              width="100em"
            />
            <h1>{organisation.username}</h1>
            <p>{organisation.email}</p>
          </>
        )}
      </main>
    );
  }
}

export default OrganisationProfile;
