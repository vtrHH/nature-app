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
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    
    return (
      
      <div>
        {observation && (
          <>     
            
            <h1>{observation.preferred_common_name}</h1>
            <br></br>
            <Slider pictures={observation.pictures}/>
            <br></br>
            <span>Obervation date: { new Date(observation.date).toLocaleDateString('en-GB', options)}</span>
            <br></br>
            <span>Observation creator: {observation.creator}</span>
            <br></br>
            <span>{observation.date.toString()}</span>
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
