import React, { Component } from 'react';
// import bird from '../data/20496-North-Island-Brown-Kiwi.json';
import {loadObservation} from '../services/observation'

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

    console.log("-------------componentDidMount()-------------------")
    console.log(observation);
    console.log(observation.location.coordinates[0])    
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('-------------componentDidUpdate-------------------');
    console.log(previousProps, this.props);
    console.log(previousState, this.state);
  }

  componentWillUnmount() {
    console.log('---------------componentWillUnmount---------------');
  }
  
  render() {
    console.log('-------------render-------------');
    const observation = this.state.observation;

    return (
      <div>  
        {observation && (
          <>
        <h1>{observation.bird}</h1>
        <br></br>
        <span>Obervation date: {observation.date}</span>
        <br></br>
        <span>Observation creator: {observation.creator}</span>
        <br></br>
        <span>{observation.location.coordinates[0]}</span>
        <br></br>
        <span>{observation.date.toString()}</span>       
          </>
        )}    
      </div>
    );
  }
}

export default SingleObservation;
