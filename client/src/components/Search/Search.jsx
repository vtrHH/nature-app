import { Component } from 'react';

import { searchSpecie, searchObservations } from '../../services/i-nature-api';

import SearchBar from '../Search/SearchBar';
import SearchList from '../Search/SearchList';
import SelectedItem from '../Search/SelectedItem';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: null,
      results: null,
      selected: null
    };
    
    // if (this.props.content === "taxa"){
    //   this.searchApi = async () => {
    //     const query = this.state.searchQuery;
    //     const results = await searchSpecie(query);
    //     console.log(`searchApi on Parent search= ${query}`);
    //     this.setState({
    //       results: results
    //     });
    //   };
    // }

    const content = this.props.content;
    switch (content) {
      case 'taxa':
        this.searchApi = async () => {
          const query = this.state.searchQuery;
          const results = await searchSpecie(query);
          console.log(`searchApi on Parent search= ${query}`);
          this.setState({
            results: results
          });
        };
        break;
      case 'observations':
        this.searchApi = async () => {
          const query = this.state.searchQuery;
          const results = await searchObservations(query);
          console.log(`searchApi on Parent search= ${query}`);
          this.setState({
            results: results
          });
        };
        break;
      case 'user':
        console.log('Search for users.');
        break;
      default:
        this.searchApi = async () => {
          const query = this.state.searchQuery;
          const results = await searchSpecie(query);
          console.log(`searchApi on Parent search= ${query}`);
          this.setState({
            results: results
          });
        };
      }
  }

  async componentDidMount() {
  }
  
 
  // searchApi = async () => {
  //   const query = this.state.searchQuery;
  //   const results = await searchSpecie(query);
  //   console.log(`searchApi on Parent search= ${query}`);
  //   this.setState({
  //     results: results
  //   });
  // };

  componentDidUpdate(previousProps, previousState) {
    // console.log('-------------componentDidUpdate-------------------');
    // console.log(`Previous props= ${previousProps}, this.props= ${this.props}`);
    // console.log(previousState, this.state);
    if (previousState.searchQuery !== this.state.searchQuery) {
      // console.log('changedddddddddd');
      this.searchApi();
    }
  }

  componentWillUnmount() {
    console.log('---------------componentWillUnmount---------------');
  }

  handleQueryChange = (query) => {
    this.setState({
      searchQuery: query
    });
    // this.triggerFiltering({
    //   search: search,
    //   stockCheck: this.state.stockCheck,
    // });
  };

  handleResult = (result) => {
    console.log(`Search------------${result.id}`);
    this.setState({ selected: result });
    this.props.onParent(result);
  };

  handleClear = () => {
    this.setState({ selected: null });
    // this.props.onParent(result)
  };

  render() {
    let user = this.state.user;
    let results = this.state.results;
    let selected = this.state.selected;
    // console.log("-------user---------");
    // console.log(user);
    return (
      <div className="container--search">
        <SearchBar content={this.props.content} onSearchBar={this.handleQueryChange} />

        {results && !selected && (
          <SearchList
            content={this.props.content}
            results={results}
            onSearch={(result) => this.handleResult(result)}
          />
        )}
        {selected && (
          <SelectedItem
            result={selected}
            selected={selected}
            onSearchClearSelected={() => this.handleClear()}
          />
        )}
      </div>
    );
  }
}

export default Search;
