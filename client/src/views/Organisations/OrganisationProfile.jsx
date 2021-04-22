import { Component } from 'react';

import { loadOrganisation } from '../../services/organisation';
import Slider from '../../components/Slider/Slider';

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
            <header>
              <h2>{organisation.organisationName}</h2>
            </header>
            {organisation.pictures && (
                <Slider pictures={organisation.pictures} />
            )}
            <h3>Contact details</h3>
            <p>{organisation.email}</p>
            <p>{organisation.phoneNumber}</p>
            <h3>Adress</h3>
            <p>
              {organisation.street} {organisation.houseNumber + ','}{' '}
              {organisation.postcode} {organisation.city}{' '}
            </p>
            <h3>Birds you can watch here</h3>
          </>
        )}
      </main>
    );
  }
}

export default OrganisationProfile;
