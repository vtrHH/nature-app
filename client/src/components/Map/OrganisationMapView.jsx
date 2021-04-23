import React, { Component } from 'react';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationIcon } from './../Map/icons/LocationIcon';

import { searchLatLng } from '../../services/nominatim';

class OrganisationMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organisation: this.props.organisation,
      currentLocation: [0, 0],
      zoom: 3
    };
  }

  async componentDidMount() {
    const { street, houseNumber, city } = this.state.organisation;
    const query = { street, houseNumber, city };
    const response = await searchLatLng(query);
    const lat = response.coordinates[1];
    const lng = response.coordinates[0];
    this.setState({ currentLocation: [lat, lng] });
  }

  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <>
        {currentLocation !== [0, 0] && (
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
        )}
      </>
    );
  }
}
export default OrganisationMapView;
