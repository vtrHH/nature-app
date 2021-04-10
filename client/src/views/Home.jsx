import { Component } from 'react';

// import { listBirds } from './../services/bird';
// import BirdList from '../components/BirdList';

class Home extends Component {
  state = {
    birds: []
  };

  async componentDidMount() {
    // const pets = await listPets();
    // this.setState({ pets });
  }

  render() {
    return (
      <main>
        <header>
          <h1>Explore the latest birds</h1>
        </header>
        {/* <PetList pets={this.state.pets} /> */}
      </main>
    );
  }
}

export default Home;