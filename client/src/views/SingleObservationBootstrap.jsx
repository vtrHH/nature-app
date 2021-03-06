import React, { Component } from "react";
import ObservationMapView from "../components/Map/ObservationMapView";
import Slider from "../components/Slider/Slider";
import {Link} from 'react-dom'
import { loadObservation } from "../services/observation";

import {
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";

import './SingleObservation.scss'


class SingleObservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      observation: null,
    };
  }

  async componentDidMount() {
    const observation = await loadObservation(this.props.match.params.id);
    this.setState({ observation: observation });
  }

  render() {
    const observation = this.state.observation;
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return (
      <div>
        {observation && (
          <>
            <Container className="mt-3">
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                  <h1>{observation.preferred_common_name}</h1>
                </Col>
              </Row>
            </Container>
            <Slider pictures={observation.pictures} />
            <Container className="mt-3">
            <Row>
            <Col md={{ span: 6, offset: 3 }} className="text-center">
                <div >
                  <div className="post_item__user">
                    {observation.creator.profilePicture ? (
                      <Image
                        roundedCircle
                        src={observation.creator.profilePicture}
                        alt={observation.creator.username}
                      />
                    ) : (
                      <Image
                        roundedCircle
                        src="https://source.unsplash.com/300x300/?smiling,woman"
                        alt={observation.creator.username}
                      />
                    )}
                    <strong>{observation.creator.username}</strong>
                  </div>
                  <div>
                    <small>
                      {" "}
                      {new Date(observation.addedDate).toLocaleDateString(
                        "en-GB",
                        options
                      )}
                    </small>
                    <p>{observation.description}</p>
                  </div>
                </div>
              </Col>
            </Row>
            </Container>
            <br></br>
            <p>{observation.description}</p>
            <ObservationMapView className="width100"
              observationLocation={observation.location.coordinates}
            />
            {observation.creator._id === this.state.user._id && (
              <>
                <Link to={`/observation/${observation._id}/delete`}>
                  <button type="button">Delete this observation</button>
                </Link>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default SingleObservation;
