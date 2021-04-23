import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { BirdIcon } from './../Map/icons/BirdIcon';
import 'leaflet/dist/leaflet.css';

class ObservationMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: props.observationLocation,
      zoom: 12
    };
  }

  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <MapContainer center={currentLocation} zoom={zoom} className="small-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={this.state.currentLocation} icon={BirdIcon} />
      </MapContainer>
    );
  }
}
export default ObservationMapView;
