import { Component } from 'react';
import birds from '../data/kiwi-species-subspecies.json'

// import { listBirds } from './../services/bird';
import BirdList from '../components/BirdList';

class Home extends Component {

  constructor(props) {
    super(props);
    // const { user } = props;
    // this.state = { ...user.preferences };
    
    this.state = {
      user: this.props.user,
      birds: []
    }
  }


  async componentDidMount() {
    // const pets = await listPets();
    this.setState({ birds: birds.results });
    console.log(this.state.user)

  }

  render() {

    let user = this.state.user;
    let birds = this.state.birds;
    console.log(user)
    return (
      <main>
        <header>
          <h1>Explore the latest birds</h1>
          {user && <h2>Hello {user.username}</h2> || <h2>Welcome!</h2>}
        </header>
        <BirdList birds={birds} />
        {/* <div>{birds.map(bird => 
          <h2 key={bird._id} >{bird.name}</h2>)}</div> */}
      </main>
    );
  }
}

export default Home;