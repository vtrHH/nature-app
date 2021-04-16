import React, { Component } from 'react';
import { createObservation } from '../services/observation';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LocationIcon } from './../components/Map/LocationIcon';
import 'leaflet/dist/leaflet.css';

class CreateObservation extends Component {
  state = {
    date: '',
    location: null,
    lat: 0,
    lng: 0,
    bird: '',
    currentLocation: [0, 0],
    zoom: 2,
    map: null
    // verified: false
    // picture: ''
  };

  componentDidMount() {
    console.log('Component Did Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    this.state.zoom !== prevState.zoom &&
      console.log('Updated' + this.state.zoom, prevState.zoom);
  }

  getUserLocation = (options) =>
    new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );

  handleFormSubmission = async (e) => {
    e.preventDefault();
    const observationLocation = {
      coordinates: [this.state.lat, this.state.lng]
    };
    const date = this.state.date;
    const bird = this.state.bird;
    const data = {
      location: observationLocation,
      date: date,
      bird: bird
    };

    const observation = await createObservation(data);
    this.props.history.push(`/observation/${observation._id}`);
  };

  handleInputChange = (e) => {
    console.log(e.target.name.value);
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      location: [this.state.lat, this.state.lng]
    });
  };

  handleCurrentLocationSearch = () => {
    const latitudeInput = document.getElementById('input-lat');
    const longitudeInput = document.getElementById('input-lng');
    this.getUserLocation()
      .then((location) => {
        const { latitude, longitude } = location.coords;
        latitudeInput.value = latitude;
        longitudeInput.value = longitude;
        this.setState({
          lat: latitude,
          lng: longitude,
          currentLocation: [latitude, longitude],
          zoom: 12
        });
        const { map, currentLocation } = this.state;
        if (map) map.flyTo(currentLocation);
      })
      .catch((error) => {
        console.log('There was an error locating the user.');
        console.log(error);
      });
  };

  render() {
    return (
      <main>
        <header>
          <h1>Add your Observation</h1>
        </header>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="input-bird">Name</label>
          <input
            type="text"
            id="input-bird"
            name="bird"
            placeholder="Bird name"
            value={this.state.bird}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="input-location">Set Location</label>

          <button onClick={this.handleCurrentLocationSearch}>Locate Me</button>

          {/*  <LocationMapView lat={this.state.lat} lng={this.state.lng} /> */}
          {this.state.zoom === 2 && (
            <MapContainer
              center={this.state.currentLocation}
              zoom={this.state.zoom}
              whenCreated={(map) => this.setState({ map })}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {this.state.lat && this.state.lng ? (
                <Marker
                  position={[this.state.lat, this.state.lng]}
                  icon={LocationIcon}
                >
                  <Popup closeButton={false}>You are here</Popup>
                </Marker>
              ) : (
                'Location is loading'
              )}
            </MapContainer>
          )}

          {this.state.zoom !== 2 && (
            <MapContainer center={this.state.currentLocation} zoom={12}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {this.state.lat && this.state.lng ? (
                <Marker
                  position={[this.state.lat, this.state.lng]}
                  icon={LocationIcon}
                >
                  <Popup closeButton={false}>You are here</Popup>
                </Marker>
              ) : (
                'Location is loading'
              )}
            </MapContainer>
          )}

          <input
            type="hidden"
            id="input-lat"
            name="lat"
            value={this.state.lat}
            placeholder="52.52437"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="hidden"
            id="input-lng"
            name="lng"
            value={this.state.lng}
            placeholder="13.41053"
            onChange={this.handleInputChange}
            required
          />
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
          {/* <button onClick={this.currentPosition}> Get Current Positon</button> */}
          <button>Add Observation</button>
        </form>
      </main>
    );
  }
}

export default CreateObservation;
