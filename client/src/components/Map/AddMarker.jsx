import React, { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import { LocationIcon } from './icons/LocationIcon';

const AddMarker = (props) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click: (e) => {
      setPosition(e.latlng);
      props.onClick(e.latlng);
    }
  });

  return position === null ? null : (
    <Marker position={position} icon={LocationIcon}></Marker>
  );
};

export default AddMarker;
