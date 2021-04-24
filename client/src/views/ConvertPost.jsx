import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { createObservationFromPost } from './../services/observation';
import Search from '../components/Search/Search';
import Slider from '../components/Slider/Slider';
import ObservationMapView from '../components/Map/ObservationMapView';

import "./SingleObservation.scss";

class ConvertPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      post: this.props.location.state.post,

      APIid: [],
      preferred_common_name: '',
      lat: 0,
      lng: 0,
      currentLocation: [0, 0],
      zoom: 2,
      map: null,
      description: ''
    };
  }

  componentDidMount() {
    console.log(this.state.post.pictures);
  }

  handleInputChange = (e) => {
    console.log(e.target.name.value);
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    console.log(this.state)
  };

  handleResult = (result) => {
    console.log(`Parent------------${result.id}`);
    this.setState({
      APIid: result.id,
      preferred_common_name: result.preferred_common_name
    });
    console.log(this.state);
  };

  handleFormSubmission = async (e) => {
    e.preventDefault();
    const { APIid, location, pictures, date } = this.state.post;
    const description = this.state.description;
    const preferred_common_name = this.state.preferred_common_name;
    const data = {
      lat: location.coordinates[0],
      lng: location.coordinates[1],
      date,
      APIid,
      preferred_common_name,
      pictures,
      description
    };
    console.log(data);
    const observation = await createObservationFromPost(data);
    this.props.history.push(`/observation/${observation._id}`);
  };

  /*   handleFormSubmission = async (event) => {
    event.preventDefault();
    const pictures = this.state.pictures;
    const body = new FormData();
    for (let picture of pictures) {
      body.append('pictures', picture);
    }
    // const oldPictures = this.state.organisation.pictures.spit(',');
    //   const oldPictures = [];
    // this.state.organisation.pictures.map((picture) => {
    //     oldPictures.push(picture);
    //   });
    body.append('oldPictures', this.state.organisation.pictures);
    await createObservation(body, this.state.organisation._id);
    this.props.history.push(`/organisation/${this.state.organisation._id}`);
  }; */

  render() {
    const post = this.state.post;
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return (
      <main>
        <header>
        <Container className="mt-3">
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                  
          <h2>New observation</h2>
          <hr></hr>
          <h5>Out of your question "{post.title}"</h5>
                </Col>
              </Row>
            </Container>
        </header>
        {post && (
          <>
            <br></br>
            <Slider pictures={post.pictures} />
            <br></br>
            
            <span>Obervation creator: {post.creator.username}</span>
            <br></br>
            <span>
              Obervation date: {new Date(post.date).toLocaleDateString('en-GB', options)}
            </span>
            <br></br>
            <span>{post.description}</span>
            <ObservationMapView
              observationLocation={post.location.coordinates}
            />

          </>
        )}
        <h4>Add the bird and a description for this observation</h4>
        
        <Container className="mt-5">
          <Row>
            <Col className="text-center" md={{ span: 6, offset: 3 }}>
              <Search
                content={'taxa'}
                onParent={(result) => this.handleResult(result)}
              />
            </Col>
          </Row>
        </Container>
        <Form className="mt-3" onSubmit={this.handleFormSubmission}>
          <Container className="mt-3">
            <Form.Group className="display-none">
              <Form.Label htmlFor="input-APIid"></Form.Label>
              <Form.Control
                type="hidden"
                id="input-APIid"
                name="APIid"
                placeholder=""
                value={this.state.APIid}
                onChange={this.handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="display-none">
              <Form.Label htmlFor="input-APIid"></Form.Label>
              <Form.Control
                type="hidden"
                id="input-common-name"
                name="common-name"
                placeholder=""
                value={this.state.preferred_common_name}
                onChange={this.handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="input-description">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                id="input-description"
                name="description"
                placeholder="Type your description here"
                value={this.state.description}
                onChange={this.handleInputChange}
                required
              />
            </Form.Group>
            <Button
              className="mb-3 mt-3"
              type="submit"
              variant="primary"
              size="lg"
              block
            >
              Add Observation
            </Button>
          </Container>
        </Form>
      </main>
    );
  }
}

export default ConvertPost;
