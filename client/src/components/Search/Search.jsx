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
          this.setState({
            results: results
          });
        };
        break;
      case 'observations':
        this.searchApi = async () => {
          const query = this.state.searchQuery;
          const results = await searchObservations(query);          
          this.setState({
            results: results
          });
        };
        break;
      default:
        this.searchApi = async () => {
          const query = this.state.searchQuery;
          const results = await searchSpecie(query);
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

  handleQueryChange = (query) => {
    this.setState({
      searchQuery: query
    });
  };

  handleResult = (result) => {
    this.setState({ selected: result });
    this.props.onParent(result);
  };

  handleClear = () => {
    this.setState({ selected: null });
  };

  render() {
    let results = this.state.results;
    let selected = this.state.selected;
    
    return (
      <div className="container--search">
        <SearchBar
          content={this.props.content}
          text={this.props.text}
          onSearchBar={this.handleQueryChange}
        />

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
