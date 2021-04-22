import { Component } from 'react';

import { listOfObservations } from '../services/observation';

import BirdList from '../components/BirdList';
import Search from '../components/Search/Search';
import HomeMapView from '../components/Map/HomeMapView';
import CarouselObservations from '../components/Carousel/CarouselObservations';
import CarouselPosts from '../components/Carousel/CarouselPosts';

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
    };
    // console.log(this.state.observations);
  

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

    /*  const carouselSpeciesOptions = {
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
    }; */

    // const carouselObservationsOptions = {
    //   route: 'observations',
    //   q: null,
    //   is_active: true,
    //   taxon_id: 3,
    //   rank: '',
    //   // rank: 'species%2Csubspecies',
    //   per_page: 20,
    //   order: 'desc',
    //   order_by: 'created_at',
    //   photos: true
    // };

    // const carouselPostsOptions = {
    //   route: 'forum',
    //   q: null,
    //   is_active: true,
    //   taxon_id: 3,
    //   rank: '',
    //   // rank: 'species%2Csubspecies',
    //   per_page: 20,
    //   order: 'desc',
    //   order_by: 'created_at',
    //   photos: true
    // };

    return (
      <main>
        <header>
          <h1>Explore the latest birds</h1>
          {(user && <h2>Hello {user.username}</h2>) || <h2>Welcome!</h2>}
        </header>
        <div className="container--home">
          <Search
            content={''}
            onParent={(result) => this.handleResult(result)}
          />
          <BirdList birds={birds} />
          <h2>Find observations close to you</h2>
          <p>
            You can either zoom within the map or just let us localize you by
            clicking the button below
          </p>
          <HomeMapView observations={this.state.observations} />
          <h2 style={{ fontSize: '2em', marginBottom: '0px' }}>Who´s that bird?</h2>
          <CarouselPosts
            show={2}
            content={'posts'}
          />
          <h2 style={{ fontSize: '2em', marginBottom: '0px' }}>Latest Observations</h2>
          <CarouselObservations
            show={2}
            content={'observations'}
          />
        </div>
      </main>
    );
  }

}

export default Home;
