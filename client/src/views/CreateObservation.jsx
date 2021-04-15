import React, { Component } from 'react';
import { createObservation } from '../services/observation';

// import MapView from './../components/Map/MapView';

class CreateObservation extends Component {
  state = {
    date: '',
    location: null,
    lat: 0,
    lng: 0,
    bird: ''
    // verified: false
    // picture: ''
  };

  componentDidMount() {
    const latitudeInput = document.getElementById('input-lat');
    const longitudeInput = document.getElementById('input-lng');
    this.getUserLocation()
      .then((location) => {
        const { latitude, longitude } = location.coords;
        latitudeInput.value = latitude;
        longitudeInput.value = longitude;
        console.log(latitude, longitude);
        this.setState({ lat: latitude, lng: longitude });
      })
      .catch((error) => {
        console.log('There was an error locating the user.');
        console.log(error);
      });
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
    // console.log(observationLocation);
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
    console.log('Button is clicked');
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

          {/* <button onClick={this.handleCurrentLocationSearch}>Locate Me</button> */}

          {/*<MapView />*/}

          <label htmlFor="input-lat">Latitude</label>
          <input
            type="text"
            id="input-lat"
            name="lat"
            value={this.state.lat}
            placeholder="52.52437"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="input-lng">Longitude</label>
          <input
            type="text"
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

// { lat: 52.52437, lng: 13.41053 }
// date
// location
// bird
// picture
// verified
// creator

// date: {
//         type: Date,
//         required: true
//     },
//     location: {
//         coordinates: [{
//             type: Number,
//             min: -180,
//             max: 180
//         }],
//         type: {
//             type: String,
//             default: 'Point',
//             required: true
//         }
//         // required: true
//     },
//     bird: {
//         type: String,
//         required: true
//     },
//     picture: {
//         type: String,
//         required: true
//     },
//     verified: {
//         type: Boolean
//     },
//     creator: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }
