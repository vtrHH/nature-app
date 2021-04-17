import React, { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import { BirdIcon } from './BirdIcon';

const AddMarker = () => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click: (e) => {
      setPosition(e.latlng);
      console.log(e.latlng);
    }
  });

  return position === null ? null : (
    <Marker position={position} icon={BirdIcon}></Marker>
  );
};

export default AddMarker;
