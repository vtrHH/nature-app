import React from 'react';
import { Popup } from 'react-leaflet';

const ObservationPopup = (props) => {
  const observation = props.data;

  return (
    <Popup className="bird_popup">
      <div>
        <span>
          <b>Name:</b>
        </span>
        {'  '}
        {observation.bird}
        <br />
        {/* } <span>{observation.creator.name}</span> */}
        {/*   {props.data.taxon.default_photo.url && (
          <img
            src={props.data.taxon.default_photo.url}
            alt={preferred_common_name}
          />
        )}
        */}
      </div>
    </Popup>
  );
};
export default ObservationPopup;
