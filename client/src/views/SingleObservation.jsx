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

    return (
      <div>
        {observation && (
          <>
          <div>
              {(observation.pictures && (
                <img
                  className="single-bird__img"
                  src={observation.pictures[0]}
                  alt={observation.preferred_common_name}
                />
              )) || <img src="" alt="" />}
            </div>
            <h1>Bird: {observation.bird}</h1>
            <h1>Preferred_common_name: {observation.preferred_common_name}</h1>
            <h1>APIid: {observation.APIid}</h1>
            <br></br>
            <span>Obervation date: {observation.date}</span>
            <br></br>
            <span>Observation creator: {observation.creator}</span>
            <br></br>
            <span>{observation.location.coordinates[0]}</span>
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
