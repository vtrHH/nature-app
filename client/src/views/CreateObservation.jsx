import React, { Component } from 'react';
import { createObservation } from '../services/observation';

import Search from '../components/Search/Search';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AddMarker from './../components/Map/AddMarker';

class CreateObservation extends Component {
  state = {
    APIid: '',
    date: '',
    lat: 0,
    lng: 0,
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
    const { date, APIid, pictures } = this.state;
    const data = {
      location: observationLocation,
      date,
      APIid,
      pictures

    };
    const body = new FormData();
    for (let key in data) {
      const value = data[key];
      if (value instanceof Array) {
        for (let item of value) {
          body.append(key, item);
        }
      } else {
        body.append(key, value);
      }
    }
    const observation = await createObservation(data);
    this.props.history.push(`/observation/${observation._id}`);
  };

  handleInputChange = (e) => {
    console.log(e.target.name.value);
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

<<<<<<< HEAD
  handleFileInputChange = (event) => {
    const { name, files } = event.target;
    const arrayOfFiles = [];
    for (const file of files) {
      arrayOfFiles.push(file);
    }
    this.setState({
      [name]: arrayOfFiles
    });
  };
=======
  getUserLocation = (options) =>
    new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
>>>>>>> 43daea18d3c16c2a63d7f0270294a4f9ad884d70

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

  handleResult = (result) => {
    console.log(`Parent------------${result.id}`);
    this.setState({
      APIid: result.id
    });
  };

  render() {
    return (
      <main>
        <header>
          <h1>Add your Observation</h1>
        </header>
        <Search onParent={(result) => this.handleResult(result)} />
        <form onSubmit={this.handleFormSubmission}>
<<<<<<< HEAD
          <label htmlFor="input-pictures">Pictures</label>
          <input
            id="input-pictures"
            type="file"
            name="pictures"
            multiple
            required
            onChange={this.handleFileInputChange}
          />

          <label htmlFor="input-bird">Name</label>
=======
>>>>>>> 43daea18d3c16c2a63d7f0270294a4f9ad884d70
          <input
            type="hidden"
            id="input-APIid"
            name="APIid"
            placeholder=""
            value={this.state.APIid}
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
          <button>Add Observation</button>
        </form>
      </main>
    );
  }
}

export default CreateObservation;
