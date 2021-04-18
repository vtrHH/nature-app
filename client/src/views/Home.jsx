import { Component } from 'react';

import { searchSpecie } from '../services/i-nature-api';
import { listOfObservations } from '../services/observation';

import BirdList from '../components/BirdList';
import SearchBar from '../components/SearchBar';
import HomeMapView from '../components/Map/HomeMapView';
import Carousel from '../components/Carousel/Carousel';

class Home extends Component {
  constructor(props) {
    super(props);
    // const { user } = props;
    // this.state = { ...user.preferences };

    this.state = {
      user: this.props.user,
      search: '',
      birds: [],
      observations: []
    };
  }

  async componentDidMount() {
    const observations = await listOfObservations();
    // console.log(this.state);
    this.setState({ observations });
  }

  updateSearch = (search) => {
    this.setState({
      search: search
    });
    // this.triggerFiltering({
    //   search: search,
    //   stockCheck: this.state.stockCheck,
    // });
  };

  launchSearch = async () => {
    const search = this.state.search;
    const birds = await searchSpecie(search);
    console.log(`launchSearch on Parent search= ${search}`);
    this.setState({
      birds: birds
    });
  };

  render() {
    let user = this.state.user;
    let birds = this.state.birds;
    console.log(user);
    return (
      <main>
        <header>
          <h1>Explore the latest birds</h1>
          {(user && <h2>Hello {user.username}</h2>) || <h2>Welcome!</h2>}
        </header>
        <div className="container--home">
          <SearchBar
            onSearchBar={this.updateSearch}
            onButtonClicked={this.launchSearch}
          />
          <BirdList birds={birds} />
          {/* <div>{birds.map(bird => 
            <h2 key={bird._id} >{bird.name}</h2>)}</div> */}
          <HomeMapView observations={this.state.observations} />
          <Carousel />
        </div>
      </main>
    );
  }
}

export default Home;
