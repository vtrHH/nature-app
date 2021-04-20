import { Component } from 'react';

import { searchSpecie } from '../services/i-nature-api';
import { listOfObservations } from '../services/observation';

import BirdList from '../components/BirdList';
// import SearchBar from '../components/SearchBar';
import Search from '../components/Search/Search'
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
    this.setState({ observations });
    // console.log(this.state.observations);
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
  
  render() {
    let user = this.state.user;
    let birds = this.state.birds;
    console.log(user);

    const carouselSpeciesOptions = {
      route: 'taxa',
      q: null,
      is_active: true,
      taxon_id: 3,
      rank: '',
      // rank: 'species%2Csubspecies',      
      per_page: 20,
      order: 'desc',
      order_by: 'created_at',
      photos: true
    };

    const carouselObservationOptions = {
      route: 'observations',
      q: null,
      is_active: true,
      taxon_id: 3,
      rank: '',
      // rank: 'species%2Csubspecies',      
      per_page: 20,
      order: 'desc',
      order_by: 'created_at',
      photos: true
    };

    return (
      <main>
        <header>
          <h1>Explore the latest birds</h1>
          {(user && <h2>Hello {user.username}</h2>) || <h2>Welcome!</h2>}
        </header>
        <div className="container--home">
          <Search content={"observations"} onParent={(result) => this.handleResult(result)} />
          <Search content={"taxa"} onParent={(result) => this.handleResult(result)} />
          {/* <SearchBar
            onSearchBar={this.updateSearch}
            onButtonClicked={this.launchSearch}
          /> */}
          <BirdList birds={birds} />
          <HomeMapView observations={this.state.observations} />
          {/* <Carousel show={5} content= {"forum"} options={carouselSpeciesOptions}/>
          <Carousel show={5} content= {"taxa"} options={carouselSpeciesOptions}/> */}
          <Carousel show={4} content= {"observations"} options={carouselObservationOptions}/>
        </div>
      </main>
    );
  }
}

export default Home;
