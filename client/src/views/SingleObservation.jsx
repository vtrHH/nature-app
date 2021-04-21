import React, { Component } from 'react';
import ObservationMapView from '../components/Map/ObservationMapView';
import Slider from '../components/Slider/Slider'

import { loadObservation } from '../services/observation';

class SingleObservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      observation: null
    };
  }

  async componentDidMount() {
    const observation = await loadObservation(this.props.match.params.id);
    this.setState({ observation: observation });
  }

  render() {
    const observation = this.state.observation;
<<<<<<< HEAD
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    
=======
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
>>>>>>> 5dee2831e1fa9414a1c547e2f26b48f2cc5de69e
    return (
      <div>
        {observation && (
<<<<<<< HEAD
          <>     
            
            <h1>{observation.preferred_common_name}</h1>
            <br></br>
            <Slider pictures={observation.pictures}/>
=======
          <>
            <h1>{observation.preferred_common_name}</h1>

            <div>
              <br></br>
              {observation.pictures.map((picture) => (
                <img
                  className="single-bird__img"
                  key={picture}
                  src={picture}
                  alt=""
                />
              ))}
            </div>
            <br></br>
            <span>
              Obervation date:{' '}
              {new Date(observation.date).toLocaleDateString('en-GB', options)}
            </span>
>>>>>>> 5dee2831e1fa9414a1c547e2f26b48f2cc5de69e
            <br></br>
            <span>Observation creator: {observation.creator.username}</span>
            <br></br>
            <span>Obervation date:{ new Date(observation.date).toLocaleDateString('en-GB', options)}</span>
            <br></br>
            <span>{observation.description}</span>
            <ObservationMapView
              observationLocation={observation.location.coordinates}
            />
          </>
        )}
      </div>
    );
  }
}

export default SingleObservation;
