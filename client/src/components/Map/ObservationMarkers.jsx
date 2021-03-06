import React from 'react';
import { Marker } from 'react-leaflet';
import { BirdIcon } from './icons/BirdIcon';
import ObservationPopup from './ObservationPopup';

const ObservationMarkers = (props) => {
  const observations = props.observations;

  const markers = observations.map(
    (observation, index) =>
      observation.location.coordinates && (
        <Marker
          key={index}
          position={observation.location.coordinates}
          icon={BirdIcon}
        >
          <ObservationPopup className="bird_popup" data={observation} />
        </Marker>
      )
  );
  return <>{markers}</>;
};

export default ObservationMarkers;
