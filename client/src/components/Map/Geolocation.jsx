import React, { Component } from 'react';
import {Button, Col} from 'react-bootstrap';

class Geolocation extends Component {
  state = {
    lat: null,
    lng: null,
    currentLocation: [0, 0]
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
        this.props.whenLocationSearchtriggered(this.state.currentLocation);
      })
      .catch((error) => {
        console.log('There was an error locating the user.');
        console.log(error);
      });
  };

  render() {
    return (
      
      <Col md={{ span: 6, offset: 3 }}>
          <Button onClick={this.handleCurrentLocationSearch} type="submit" variant="primary" size="lg" block>
          Locate me
          </Button>
          </Col>
    );
  }
}

export default Geolocation;