import React, { Component } from 'react';
import { createObservation } from '../services/observation';

import Search from '../components/Search/Search'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LocationIcon } from './../components/Map/LocationIcon';
import 'leaflet/dist/leaflet.css';

class CreateObservation extends Component {
  state = {  
    APIid: '',   
    date: '',
    location: null,
    lat: 0,
    lng: 0,
    currentLocation: [0, 0],
    zoom: 2,
    map: null
    // verified: false
    // picture: ''
  };

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
    const APIid = this.state.APIid;
    const data = {
      location: observationLocation,
      date: date,
      APIid: APIid
    };

    const observation = await createObservation(data);
    this.props.history.push(`/observation/${observation._id}`);
  };

  

  handleInputChange = (e) => {
    console.log(e.target.name.value);
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      
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

  handleResult = (result) => {
    console.log(`Parent------------${result.id}`);
    this.setState({
      APIid : result.id
    })
    // this.props.onSelectClicked(id)
  }

  render() {
    return (
      <main>
        <header>
          <h1>Add your Observation</h1>
        </header>
        <Search onParent={(result) => this.handleResult(result)}/>
        <form onSubmit={this.handleFormSubmission}>          
          <input
            type="hidden"
            id="input-APIid"
            name="APIid"
            placeholder=""
            value={this.state.APIid} 
            onChange={this.handleInputChange}            
            required
          />
          <label htmlFor="input-location">Set Location</label>
          <button onClick={this.handleCurrentLocationSearch}>Locate Me</button>
          {/*  <LocationMapView lat={this.state.lat} lng={this.state.lng} /> */}
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

          <input
            type="hidden"
            id="input-lat"
            name="lat"
            value={this.state.lat}
            placeholder="latitude"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="hidden"
            id="input-lng"
            name="lng"
            value={this.state.lng}
            placeholder="longitude"
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
