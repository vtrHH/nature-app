import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import ObservationMarkers from './ObservationMarkers';
import 'leaflet/dist/leaflet.css';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 52.52437, lng: 13.41053 },
      zoom: 12
    };
    console.log(props.observations);
  }

  render() {
    const { currentLocation, zoom } = this.state;
    // console.log(this.props.observations);
    return (
        <MapContainer center={currentLocation} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <ObservationMarkers observations={this.props.observations} />
        </MapContainer>

    );
  }
}
export default MapView;
