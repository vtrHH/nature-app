import { Component } from 'react';
import birds from '../../data/kiwi-species-subspecies.json';

import { searchSpecie } from '../../services/i-nature-api';
import { listOfObservations } from '../../services/observation';

import SearchBar from '../Search/SearchBar';
import SearchList from '../Search/SearchList';
// import MapView from '../Map/MapView';


class Search extends Component {
  constructor(props) {
    super(props);   

    this.state = {      
      searchQuery : null,
      results: null,
    };
  }

  async componentDidMount() {   
    // this.searchApi()
  //   const query  = this.state.searchQuery ;
  //   const results = await searchSpecie(query);   
  //   this.setState({
  //     results : results
  // })
}
  

  searchApi = async () => {
    const query  = this.state.searchQuery ;
    const results = await searchSpecie(query);
    console.log(`searchApi on Parent search= ${query}`);
    this.setState({
      results : results
    });
  }

  // async componentDidMount() {
  //   const observation = await loadObservation(this.props.match.params.id);
  //   this.setState({ observation: observation });

  //   console.log("-------------componentDidMount()-------------------")
  //   console.log(observation);
  //   console.log(observation.location.coordinates[0])    
  // }

  componentDidUpdate(previousProps, previousState) {
    console.log('-------------componentDidUpdate-------------------');
    console.log(`Previous props= ${previousProps}, this.props= ${this.props}`);
    console.log(previousState, this.state);
    if (previousState.searchQuery !== this.state.searchQuery ) {
      console.log("changedddddddddd");
      this.searchApi()

    }
  }

  componentWillUnmount() {
    console.log('---------------componentWillUnmount---------------');
  }


  handleQueryChange = (query ) => {
    this.setState({
      searchQuery : query 
    });
    // this.triggerFiltering({
    //   search: search,
    //   stockCheck: this.state.stockCheck,
    // });
  };

  

  render() {
    let user = this.state.user;
    let results = this.state.results;
    console.log(user);
    return (
         
        <div className="container--home">
        
          <SearchBar
            onSearchBar={this.handleQueryChange}            
          />
          {results && (
           <SearchList results={results} />
          )}
        
                
        </div>
    );
  }
}

export default Search;
