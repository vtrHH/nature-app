import React, { Component } from 'react';
import { createObservation } from '../services/observation';

class CreateObservation extends Component {
  state = {
    date: '',
    location: [52.52437, 13.41053],
    lat: 0,
    lng: 0,
    bird: ''
    // verified: false
    // picture: ''
  };

  currentPosition() {
    // let lat = 11;
    // let lng = 33;
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });

    // console.log(lat,lng);
    // this.setState({
    //     lat : lat,
    //     lng : lng
    // })
  }

  componentDidMount() {
    if ('geolocation' in navigator) {
      console.log('geolocation Available');
    } else {
      console.log('geolocation Not Available');
    }
    // this.currentPosition()
  }

  handleFormSubmission = async (e) => {
    e.preventDefault();
    const observationLocation = {
      coordinates: [this.state.lat, this.state.lng]
    };
    console.log(observationLocation);
    const date = this.state.date;
    const bird = this.state.bird;
    const data = {
      location: observationLocation,
      date: date,
      bird: bird
    };
    //  console.log(data);
    //   console.log(observationLocation, date, bird)

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

  render() {
    return (
      <main>
        <header>
          <h1>Add your Observation</h1>
        </header>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="input-bird">Bird</label>
          <input
            type="text"
            id="input-bird"
            name="bird"
            placeholder="Bird name"
            value={this.state.bird}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="input-lat">Latitude</label>
          <input
            type="number"
            id="input-lat"
            name="lat"
            value={this.state.lat}
            placeholder="52.52437"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="input-lng">Longitude</label>
          <input
            type="number"
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
