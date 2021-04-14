import React from 'react';
import { Popup } from 'react-leaflet';
import '../App.scss';

const MarkerPopup = (props) => {
  const { preferred_common_name } = props.data.taxon;

  return (
    <Popup class="bird_popup">
      <div>
        <span>
          <b>Common Name:</b>
        </span>
        {'  '}
        {preferred_common_name}
        <br />
        {props.data.taxon.default_photo.url && (
          <img
            src={props.data.taxon.default_photo.url}
            alt={preferred_common_name}
          />
        )}
      </div>
    </Popup>
  );
};
export default MarkerPopup;
