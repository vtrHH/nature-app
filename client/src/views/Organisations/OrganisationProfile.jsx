import { Component } from 'react';

import { loadOrganisation } from '../../services/organisation';
import Slider from '../../components/Slider/Slider';
import BirdItem from '../../components/BirdItem';
import { searchSpecieById } from '../../services/i-nature-api';

class OrganisationProfile extends Component {
  state = {
    organisation: null,
    birds: []
  };

  async componentDidMount() {
    const { organisation } = await loadOrganisation(this.props.match.params.id);
    this.setState({ organisation });

    this.state.organisation.birds.map(async (bird) => {
      const birdClone = this.state.birds;
      const birdDetails = await this.findBirdDetails(bird);
      birdClone.push(birdDetails);
      this.setState({ birds: birdClone });
    });
  }

  findBirdDetails = async (bird) => {
    const birdDetail = await searchSpecieById(bird);
    return birdDetail[0];
  };

  render() {
    const organisation = this.state.organisation;
    const birds = this.state.birds;
    return (
      <main>
        {organisation && birds && (
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
            <h3>Address</h3>
            <p>
              {organisation.street} {organisation.houseNumber + ','}{' '}
              {organisation.postcode} {organisation.city}{' '}
            </p>
            <h3>Birds you can watch here</h3>
            {birds.map((bird) => (
              <BirdItem bird={bird} />
            ))}
          </>
        )}
      </main>
    );
  }
}

export default OrganisationProfile;
