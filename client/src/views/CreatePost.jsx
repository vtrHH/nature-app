import React, { Component } from 'react';
import { createPost } from '../services/forum';

class CreatePost extends Component {
  state = {
    date: '',
    location: [52.52437, 13.41053],
    lat: 0,
    lng: 0,
    title: '',
    text: ''
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
    const title = this.state.title;
    const text = this.state.text;
    const data = {
      location: observationLocation,
      date: date,
      bird: bird, 
      title:title,
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
          <button>Add Post</button>
        </form>
      </main>
    );
  }
}

export default CreatePost;