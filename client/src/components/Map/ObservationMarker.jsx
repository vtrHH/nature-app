import React from 'react';
import { Marker } from 'react-leaflet';
import { BirdIcon } from './BirdIcon';
// import ObservationPopup from './BirdPopup';

const ObservationMarkers = (props) => {
  const { results } = props.observation;

  const markers = results.map(
    (result, index) =>
      result.geojson.coordinates && (
        <Marker
          key={index}
          position={result.geojson.coordinates}
          icon={BirdIcon}
        ></Marker>
      )
  );
  return <>{markers}</>;
};

export default ObservationMarkers;
