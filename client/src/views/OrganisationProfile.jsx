import { Component } from 'react';

import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';

import { loadOrganisation } from '../services/organisation';
// import PetList from '../components/PetList';

class OrganisationProfile extends Component {
  state = {
    organisation: null,
    birds: []
  };

  async componentDidMount() {
    const { organisation, birds, donations } = await loadOrganisation(
      this.props.match.params.id
    );
    this.setState({ organisation, birds, donations });
  }

  render() {
    const { organisation } = this.state;
    return (
      <main>
        {organisation && (
          <>
            <Helmet>
              <title>Organisation - {organisation.name}</title>
            </Helmet>
            <h1>{organisation.name}</h1>
            {/* <h3>${donations}€ received so far</h3>
            <Link to={`/organisation/${organisation._id}/donate`}>Donate to Organisation</Link>
            <PetList birds={birds} /> */}
          </>
        )}
      </main>
    );
  }
}

export default OrganisationProfile;
