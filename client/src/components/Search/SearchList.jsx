import { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchItem from './SearchItem';

// const SearchList = ({ results }) => {

  class SearchList extends Component { 
  
  constructor(props) {
      super(props);
      this.state = {
        APIid: null,
        results: props.results
      }
  }

  handleResultId = (id) => {
    console.log(`SearchList------------${id}`)
    // this.props.onSearchClicked(id)
  }

  render() {

    const results = this.props.results;
    return (
    <div className="search__list">
      {results.map(result => (
        <Link key={result.id} to={`/bird/${result.id}`}>
          <SearchItem result={result} onListClicked={() => this.handleResultId(result.id)}/>
        </Link>
      ))}
    </div>
  );
};
  }

export default SearchList; 