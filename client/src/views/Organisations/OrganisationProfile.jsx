import { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

import './OrganisationProfile.scss';

import { loadOrganisation } from "../../services/organisation";
import Slider from "../../components/Slider/Slider";
import BirdItem from "../../components/BirdItem";

import { searchSpecieById } from "../../services/i-nature-api";

import OrganisationMapView from "../../components/Map/OrganisationMapView";
import GetGeoDataOfObservatory from "../../components/Map/GetGeoDataOfObservatory";

class OrganisationProfile extends Component {
  state = {
    organisation: null,
    currentLocation: [0, 0],
    birds: [],
    locationLoaded: false,
  };

  async componentDidMount() {
    const { organisation } = await loadOrganisation(this.props.match.params.id);
    this.setState({ organisation });
    if (this.state.organisation.birds) {
      this.state.organisation.birds.map(async (bird) => {
        const birdClone = this.state.birds;
        const birdDetails = await this.findBirdDetails(bird);
        birdClone.push(birdDetails);
        this.setState({ birds: birdClone });
      });
    }
  }

  findBirdDetails = async (bird) => {
    const birdDetail = await searchSpecieById(bird);
    return birdDetail[0];
  };

  updateLocationOfState = (location) => {
    if (this.state.birds) {
      this.setState({ currentLocation: location, locationLoaded: true });
    }
  };

  render() {
    const organisation = this.state.organisation;
    const birds = this.state.birds;
    return (
      <>
        {organisation && (
          <main>
            <header>
              <Container className="mt-3">
                <Row>
                  <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <h2>{organisation.organisationName}</h2>
                  </Col>
                </Row>
              </Container>
            </header>

            {organisation.pictures && (
              <Slider pictures={organisation.pictures} />
            )}
            <br />

            <Container className="mt-3">
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                  <h3>About <br/> <strong>{organisation.organisationName}</strong></h3>
                  <p>{organisation.description}</p>
                  <h5>Contact details</h5>
                  <p>{organisation.email}</p>
                  <p>{organisation.phoneNumber}</p>
                  <h5>Address</h5>
                  <p>
                    {organisation.street} {organisation.houseNumber + ","}{" "}
                    {organisation.postcode} {organisation.city}{" "}
                  </p>
                </Col>
              </Row>
            </Container>
            <GetGeoDataOfObservatory
              organisation={organisation}
              whenLocationSearchtriggered={this.updateLocationOfState}
            />
            {this.state.locationLoaded === true && (
              <OrganisationMapView
                organisation={organisation}
                currentLocation={this.state.currentLocation}
              />
            )}
            {birds && (
              <>
                <Container className="mt-3">
                  <Row>
                    <Col md={12} className="text-center">
                        <h5>
                          Birds you can watch in <br/>{organisation.organisationName}
                        </h5>
                    {/* <CardDeck> */}
                      <div className="birdlist">
                        {birds.map((bird) => (
                          <BirdItem bird={bird} />
                        ))}
                      </div>
                    {/* </CardDeck> */}
                    </Col>
                  </Row>
                </Container>
              </>
            )}
          </main>
        )}
      </>
    );
  }
}

export default OrganisationProfile;
