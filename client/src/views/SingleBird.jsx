import React, { Component } from 'react'
import bird from '../data/20496-North-Island-Brown-Kiwi.json'

class SingleBird extends Component {

    constructor(props) {
    super(props);
    
    this.state = {
      user: this.props.user,
      bird: []
    }
  }


  async componentDidMount() {
    // const pets = await listPets();
    this.setState({ bird: bird.results });
    console.log(this.state.user)

  }


    render() {

        const user = this.state.user;
        let bird = this.state.bird;
        console.log(bird)
        let bird2 = this.state.bird.map((item) => {
        return item
        });
        console.log(bird2)
        
        return (
            <div>
            {bird.map(item =>  (
                <h1>Name {item.name}</h1>                   
                )
            )}       
            {/* How can I just extract the value without mapping it?          */}
            {/* How can I add more html elements without braking? return doesnt work for me...          */}
            </div>
        )
    }
}

export default SingleBird
