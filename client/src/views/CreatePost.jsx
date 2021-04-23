import React, { Component } from "react";
import { createPost } from "../services/forum";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import Search from "../components/Search/Search";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AddMarker from "./../components/Map/AddMarker";
import Geolocation from "./../components/Map/Geolocation";

class CreatePost extends Component {
  state = {
    // APIid: [],
    // preferred_common_name: "",
    date: "",
    lat: 0,
    lng: 0,
    title: "",
    text: "",
    currentLocation: [0, 0],
    zoom: 2,
    map: null,
    pictures: "",
    // verified: false
  };

  handleFormSubmission = async (e) => {
    e.preventDefault();
    const { lat, lng, date, title, text, pictures } = this.state;
    const data = {
      lat,
      lng,
      date,
      title,
      text,
      pictures,
    };

    const body = new FormData();
    body.append("date", data.date);
    body.append("title", data.title);
    body.append("text", data.text);
    body.append("lat", data.lat);
    body.append("lng", data.lng);

    for (let picture of data.pictures) {
      body.append("pictures", picture);
    }

    const post = await createPost(body);
    this.props.history.push(`/forum/${post._id}`);
  };

  handleInputChange = (e) => {
    console.log(e.target.name.value);
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      location: [this.state.lat, this.state.lng],
    });
  };

  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    const arrayOfFiles = [];
    for (const file of files) arrayOfFiles.push(file);
    this.setState({
      [name]: arrayOfFiles,
    });
  };

  handleMarkerChange = (latlng) => {
    this.setState({
      lat: latlng.lat,
      lng: latlng.lng,
    });
  };

  // handleResult = (result) => {
  //   console.log(`Parent------------${result.id}`);
  //   this.setState({
  //     APIid: result.id,
  //     preferred_common_name: result.preferred_common_name,
  //   });
  // };

  updateLocationOfState = (location) => {
    this.setState({ currentLocation: location });
    const { map, currentLocation } = this.state;
    if (map) map.flyTo(currentLocation, 12, { duration: 3 });
    console.log(this.state.currentLocation);
  };

  render() {
    return (
      <main>
        <Container className="mt-3">
          <Row>
            <Col className="text-center" md={{ span: 6, offset: 3 }}>
              <h1>Add your Question</h1>
            </Col>
          </Row>
        </Container>
        {/* <Container className="mt-3">
          <Row>
            <Col className="text-center" md={{ span: 6, offset: 3 }}>
              <Search
                content={"taxa"}
                onParent={(result) => this.handleResult(result)}
              />
            </Col>
          </Row>
        </Container> */}
        <Form className="mt-3" onSubmit={this.handleFormSubmission}>
          <Container className="mt-3">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h4>Locate your observation</h4>
                <p>
                  {" "}
                  To add your location details, please first let us localize you
                  by clicking the button below and then choose your location
                  with a click on the map
                </p>
                <Geolocation
                  whenLocationSearchtriggered={this.updateLocationOfState}
                />

                <MapContainer
                  className="mapContainer"
                  center={this.state.currentLocation}
                  zoom={this.state.zoom}
                  whenCreated={(map) => this.setState({ map })}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <AddMarker onClick={this.handleMarkerChange} />
                </MapContainer>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h4>Add question details</h4>
                <Form.Group>
                  <Form.File
                    id="input-pictures"
                    label="Select your pictures"
                    type="file"
                    multiple
                    name="pictures"
                    onChange={this.handleFileInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="input-title">Title</Form.Label>
                  <Form.Control
                    type="text"
                    id="input-title"
                    name="title"
                    placeholder="Short resume of your question"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="input-text">Your Question</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="textarea"
                    id="input-text"
                    name="text"
                    placeholder="Your question"
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="input-date">Date</Form.Label>
                  <Form.Control
                    type="date"
                    id="input-date"
                    name="date"
                    value={this.state.date}
                    placeholder="Select date"
                    onChange={this.handleInputChange}
                    required
                  />
                </Form.Group>
                {/* <Form.Group className="display-none">
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
                </Form.Group> */}
                <Button
                  className="mb-3 mt-3"
                  type="submit"
                  variant="primary"
                  size="lg"
                  block
                >
                  Add Observation
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>       
      </main>
    );
  }
}

export default CreatePost;
