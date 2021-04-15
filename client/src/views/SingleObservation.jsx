import React, { Component } from 'react';
// import bird from '../data/20496-North-Island-Brown-Kiwi.json';
import {loadObservation} from '../services/observation'

class SingleObservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      observation: {}
    };
  }

  async componentDidMount() {
    const observation = await loadObservation(this.props.match.params.id);
    this.setState({ observation: observation });
    console.log(observation);
  }

  render() {
    const user = this.state.user;
    let observation = this.state.observation;

    return (
      <div>
      <h1>Single Observation</h1>
        <span>{observation.bird}</span>
        <span>{observation.date}</span>
        {/* <span>{observation.location.coordinates}</span> */}
        {/* <div>
          {(observation.default_photo !== null && (
            <img src={observation.default_photo.medium_url} alt={observation.name} />
          )) || <img src="" alt="" />}
        </div>

        <div className="observation__item__details">
          <h3>{observation.preferred_common_name}</h3>
          <h5>{observation.name}</h5>
          <small>
            {observation.matched_term} | {observation.iconic_taxon_name} |{' '}
            {observation.preferred_common_name}
          </small>
          <p>{observation.wikipedia_summary}</p>
        </div> */}
      </div>
    );
  }
}

export default SingleObservation;
