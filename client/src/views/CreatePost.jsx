import React, { Component } from 'react';
import { createPost } from '../services/forum';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AddMarker from './../components/Map/AddMarker';

class CreatePost extends Component {
  state = {
    date: '',
    lat: 0,
    lng: 0,
    title: '',
    text: '',
    currentLocation: [0, 0],
    zoom: 2,
    map: null
    // verified: false
    // picture: ''
  };

  handleFormSubmission = async (e) => {
    e.preventDefault();
    const observationLocation = {
      coordinates: [this.state.lat, this.state.lng]
    };
    console.log(observationLocation);
    const date = this.state.date;
    const bird = this.state.bird;
    const title = this.state.title;
    const text = this.state.text;
    const data = {
      location: observationLocation,
      date: date,
      bird: bird,
      title: title,
      text: text
    };
    const post = await createPost(data);
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

  getUserLocation = (options) =>
    new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );

  handleCurrentLocationSearch = () => {
    this.getUserLocation()
      .then((location) => {
        const { latitude, longitude } = location.coords;
        console.log(location.coords);
        this.setState({
          lat: latitude,
          lng: longitude,
          currentLocation: [latitude, longitude]
        });
        const { map, currentLocation } = this.state;
        if (map) map.flyTo(currentLocation, 12, { duration: 3 });
      })
      .catch((error) => {
        console.log('There was an error locating the user.');
        console.log(error);
      });
  };

  handleMarkerChange = (latlng) => {
    this.setState({
      lat: latlng.lat,
      lng: latlng.lng
    });
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
          <label>Set Location</label>
          <button onClick={this.handleCurrentLocationSearch}>Locate Me</button>

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
