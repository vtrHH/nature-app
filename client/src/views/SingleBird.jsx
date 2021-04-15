import React, { Component } from 'react';
import bird from '../data/20496-North-Island-Brown-Kiwi.json';
import {searchSpecieById} from '../services/i-nature-api'


class SingleBird extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      bird: {}
    };
  }
  
  async componentDidMount() {
    const bird = await searchSpecieById(this.props.match.params.id);
    const singleBird = bird[0]
    // console.log(singleBird.id)
    this.setState({ bird: singleBird });
    
    };


  render() {
    const user = this.state.user;    
    const bird = this.state.bird;      
    console.log(bird)
        
    return (
      <div class="single-bird">
        {/* <h1>SingleBird</h1> */}
        <h1>{bird.name}</h1>
        <h2>{bird.preferred_common_name}</h2>
        <div>
          {(bird.default_photo && (
            <img className="single-bird__img" src={bird.default_photo.medium_url} alt={bird.name} />
          )) || <img src="" alt="" />}
        </div>

        <div>
          <h3>{bird.preferred_common_name}</h3>
          <h5>{bird.name}</h5>
          <small>
            {bird.matched_term} | {bird.iconic_taxon_name} |{' '}
            {bird.preferred_common_name}
          </small>
          <p dangerouslySetInnerHTML={{__html:bird.wikipedia_summary}}></p>
        </div>
      </div>
    );
  }
}

export default SingleBird;
