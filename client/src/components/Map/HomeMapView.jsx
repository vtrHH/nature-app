import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { MapContainer, TileLayer } from 'react-leaflet';
import ObservationMarkers from './ObservationMarkers';
import Geolocation from './Geolocation';
import 'leaflet/dist/leaflet.css';
import './map.scss';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: [52.52437, 13.41053],
      zoom: 12,
      map: null
    };
  }

  updateLocationOfState = (location) => {
    this.setState({ currentLocation: location });
    const { map, currentLocation } = this.state;
    if (map) map.flyTo(currentLocation, 12, { duration: 3 });
    console.log(this.state.currentLocation);
  };

  render() {
    const { currentLocation, zoom } = this.state;
    return (
      
      <Row>
        
        <Geolocation whenLocationSearchtriggered={this.updateLocationOfState} />
        <MapContainer
          className="mapContainer"
          center={currentLocation}
          zoom={zoom}
          whenCreated={(map) => this.setState({ map })}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <ObservationMarkers observations={this.props.observations} />
        </MapContainer>
      
      </Row>
      
    );
  }
}
export default MapView;
