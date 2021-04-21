import React, { Component } from 'react';
import { createPost } from '../services/forum';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AddMarker from './../components/Map/AddMarker';
import Geolocation from './../components/Map/Geolocation';

class CreatePost extends Component {
  state = {
    date: '',
    lat: 0,
    lng: 0,
    title: '',
    text: '',
    currentLocation: [0, 0],
    zoom: 2,
    map: null,
    pictures: ''
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
      pictures
    };

    const body = new FormData();
    body.append('date', data.date);
    body.append('title', data.title);
    body.append('text', data.text);
    body.append('lat', data.lat);
    body.append('lng', data.lng);

    for (let picture of data.pictures) {
      body.append('pictures', picture);
    }

    const post = await createPost(body);
    this.props.history.push(`/forum/${post._id}`);
  };

  handleInputChange = (e) => {
    console.log(e.target.name.value);
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      location: [this.state.lat, this.state.lng]
    });
  };

  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    const arrayOfFiles = [];
    for (const file of files) arrayOfFiles.push(file);
    this.setState({
      [name]: arrayOfFiles
    });
  };

  handleMarkerChange = (latlng) => {
    this.setState({
      lat: latlng.lat,
      lng: latlng.lng
    });
  };

  updateLocationOfState = (location) => {
    this.setState({ currentLocation: location });
    const { map, currentLocation } = this.state;
    if (map) map.flyTo(currentLocation, 12, { duration: 3 });
    console.log(this.state.currentLocation);
  };

  render() {
    return (
      <main>
        <header>
          <h1>Add your Question</h1>
        </header>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="input-title">Titel</label>
          <input
            type="text"
            id="input-title"
            name="title"
            placeholder="Short resume of your question"
            value={this.state.title}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="input-text">Your question</label>
          <input
            type="textarea"
            id="input-text"
            name="text"
            placeholder="Your question"
            value={this.state.text}
            onChange={this.handleInputChange}
            required
          />

          <label htmlFor="input-pictures">Pictures</label>
          <input
            id="input-pictures"
            type="file"
            name="pictures"
            multiple
            onChange={this.handleFileInputChange}
          />

          <label>Location</label>
          <p>
            {' '}
            To add your location details, please first let us localize you by
            clicking the button below and then choose your location with a click
            on the map
          </p>
          <Geolocation
            whenLocationSearchtriggered={this.updateLocationOfState}
          />

          <MapContainer
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

          <label htmlFor="input-date">Date</label>
          <input
            type="date"
            id="input-date"
            name="date"
            value={this.state.date}
            placeholder="Select date"
            onChange={this.handleInputChange}
            required
          />

          <button>Add Post</button>
        </form>
      </main>
    );
  }
}

export default CreatePost;
