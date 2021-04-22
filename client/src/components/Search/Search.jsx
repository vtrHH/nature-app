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

    if (this.props.content === 'taxa') {
      this.searchApi = async () => {
        const query = this.state.searchQuery;
        const results = await searchSpecie(query);
        console.log(`searchApi on Parent search= ${query}`);
        this.setState({
          results: results
        });
      };
    }

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

  async componentDidMount() {}

  componentDidUpdate(previousProps, previousState) {
    if (this.state.searchQuery === '') {
    } else if (previousState.searchQuery !== this.state.searchQuery) {
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
    let results = this.state.results;
    let selected = this.state.selected;
    // console.log("-------user---------");
    // console.log(user);
    return (
      <div className="container--search">
        <SearchBar
          content={this.props.content}
          onSearchBar={this.handleQueryChange}
        />

        {/* <SearchList
          content={this.props.content}
          results={results}
          onSearch={(result) => this.handleResult(result)}
        /> */}

        {this.state.searchQuery !== '' && !selected ? (
          <SearchList
            content={this.props.content}
            results={results}
            onSearch={(result) => this.handleResult(result)}
          />
        ) : (
          <></>
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
