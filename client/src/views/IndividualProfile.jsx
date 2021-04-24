import { Component } from 'react';
import './IndividualProfile.scss';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import CarouselObservationsByUser from '../components/Carousel/CarouselObservationsByUser';
import CarouselPostsByUser from '../components/Carousel/CarouselPostsByUser';
import { loadIndividual } from '../services/individual';
import { Link } from 'react-router-dom';

class IndividualProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      individual: null,
      user: this.props.match.params.id,
      loggedUser: this.props.user
    };
  }

  async componentDidMount() {
    // console.log(`Params ID is ${this.state.user}`)
    const individual = await loadIndividual(this.state.user);
    console.log(`Individual is ${individual}`);
    this.setState({ individual });
  }

  render() {
    const { individual } = this.state;
    return (
      <>
        {individual && (
          <main>
            <Container className="mt-3">
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                  <div class="profile">
                    <Image
                      className="thumbnail"
                      src={individual.profilePicture}
                      alt={individual.username}
                    />

                    <h3>{individual.username}</h3>

                    <strong>
                      {individual.firstName}
                      {individual.lastName}
                    </strong>
                    <small>
                      Username: <strong>{individual.username}</strong>
                    </small>
                    <p> {individual.aboutMe}</p>

                    {individual._id === this.state.loggedUser._id && (
                      <>
                      <Link to={`/individual/${individual._id}/edit`}>
                        <Button size="sm" type="button">
                          Edit profile
                        </Button>
                      </Link>
                      {/*<br/>
                      <br/>
                      <Link to={`/individual/${individual._id}/delete`}>
                        <Button size="sm" type="button">
                          Delete profile
                        </Button>
                      </Link> */}
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>

            <br />

            <h2 style={{ fontSize: '2em', marginBottom: '0px' }}>
              Latest Observations
            </h2>
            <CarouselObservationsByUser
              show={2}
              content={'observations'}
              user={this.state.individual}
            />
            <h2 style={{ fontSize: '2em', marginBottom: '0px' }}>
              Latest Posts
            </h2>
            <CarouselPostsByUser
              show={2}
              content={'posts'}
              user={this.state.individual}
            />
          </main>
        )}
      </>
    );
  }
}

export default IndividualProfile;
