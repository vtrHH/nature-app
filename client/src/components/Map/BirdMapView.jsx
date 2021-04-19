import React, { Component } from 'react';

import { loadObservationsByBirdId } from './../../services/observation';

import { MapContainer, TileLayer } from 'react-leaflet';
import ObservationMarkers from './ObservationMarkers';
import 'leaflet/dist/leaflet.css';

class BirdMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: [0, 0],
      zoom: 1.5,
      api_id: props.birdApiID,
      observations: []
    };
    console.log(props.birdApiID);
  }

  async componentDidMount() {
    const observations = await loadObservationsByBirdId(this.state.api_id);
    this.setState({ observations });
    console.log(observations);
  }

  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <MapContainer center={currentLocation} zoom={zoom} className="small-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ObservationMarkers observations={this.state.observations} />
      </MapContainer>
    );
  }
}
export default BirdMapView;
