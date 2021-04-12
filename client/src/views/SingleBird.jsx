import React, { Component } from 'react'
import bird from '../data/20496-North-Island-Brown-Kiwi.json'

class SingleBird extends Component {

    constructor(props) {
    super(props);
    
    this.state = {
      user: this.props.user,
      bird: bird.results
    }
  }


  async componentDidMount() {
    // const pets = await listPets();
    this.setState({ bird: bird.results });
    console.log(this.state.user)

  }


    render() {

        const user = this.state.user;
        let bird = this.state.bird[0];
        // let singleBird = bird[0]
        // console.log(`singleBird: ${singleBird}`)
        // console.log(singleBird.id)

        // let shiftBird = bird.shift()
         // console.log(`shiftBird: ${shiftBird}`)

        return (
            <div>
            <h1>{bird.name}</h1>
            <div>
        {bird.default_photo !== null && <img src={bird.default_photo.medium_url} alt={bird.name}/> || <img src="" alt=""/>}    
      
    </div>
   
      <div className="bird__item__details">
        <h3>{bird.preferred_common_name}</h3>
        <h5>{bird.name}</h5>
        <small>
          {bird.matched_term} | {bird.iconic_taxon_name} | {bird.preferred_common_name}
        </small>
        <p>{bird.wikipedia_summary}</p>      
      </div>
            
            </div>
        )
    }
}

export default SingleBird
