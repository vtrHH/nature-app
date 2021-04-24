import React, { Component } from 'react';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationIcon } from './../Map/icons/LocationIcon';

class OrganisationMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.organisation,
      currentLocation: this.props.currentLocation,
      zoom: 10
    };
  }

  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <>
        <MapContainer
          center={currentLocation}
          zoom={zoom}
          className="small-map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={this.state.currentLocation} icon={LocationIcon} />
        </MapContainer>
      </>
    );
  }
}

export default OrganisationMapView;
