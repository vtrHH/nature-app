import React from 'react';
import { Popup } from 'react-leaflet';
import './map.scss';

const ObservationPopup = (props) => {
  const observation = props.data;

  return (
    <Popup className="bird_popup" closeButton={false}>
      <div>
        {observation.preferred_common_name && (
          <>
            <span>
              <b>Common name:</b>
            </span>
            {'  '}
            {observation.preferred_common_name}
            <br />
          </>
        )}
        <span>
          <b>Observed by:</b>
        </span>
        {'  '}
        {observation.creator.username}
        <br />
        <a href={`/observation/${observation._id}`}>Get more details here...</a>
      </div>
    </Popup>
  );
};
export default ObservationPopup;
