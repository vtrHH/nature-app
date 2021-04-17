import React, { Component } from 'react';
import { createObservation } from '../services/observation';

// import MapView from './../components/Map/MapView';
import Search from '../components/Search/Search'

class CreateObservationSearch extends Component {
  state = {
    date: '',    
    birdId: '',
   
    // verified: false
    // picture: ''
  };

  componentDidMount() {
    
  }

  

  handleFormSubmission = async (e) => {
    e.preventDefault();
   
    const date = this.state.date;
    const birdId = this.state.birdId;
    const data = {
      date: date,
      birdId: birdId
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
    console.log('Button is clicked');
  };

  handleResult = (result) => {
    console.log(`Parent------------${result.id}`)   
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
          <label htmlFor="input-bird">Bird Name</label>
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
            placeholder="latitude"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="input-lng">Longitude</label>
          <input
            type="text"
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

export default CreateObservationSearch;