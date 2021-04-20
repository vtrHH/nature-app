import React, { Component } from 'react';
import ObservationMapView from '../components/Map/ObservationMapView';
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

    //  console.log('-------------componentDidMount()-------------------');
    //  console.log(observation);
    //  console.log(observation.location.coordinates[0]);
  }

  componentDidUpdate(previousProps, previousState) {
    //  console.log('-------------componentDidUpdate-------------------');
    //  console.log(previousProps, this.props);
    //  console.log(previousState, this.state);
  }

  componentWillUnmount() {
    //  console.log('---------------componentWillUnmount---------------');
  }

  render() {
    //  console.log('-------------render-------------');
    const observation = this.state.observation;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return (
      
      <div>
        {observation && (
          <>
            <h1>{observation.preferred_common_name}</h1>
            <br></br>
            {observation.pictures.map((picture) => (
              <img className="single-bird__img" key = {picture} src={picture} alt=""/>
            ))}
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
