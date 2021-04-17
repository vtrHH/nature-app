import { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchItem from './SearchItem';

// const SearchList = ({ results }) => {

  class SearchList extends Component { 
  
  constructor(props) {
      super(props);
      this.state = {
        APIid: null,
        results: props.results,
        selected: null
      }
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('-------------componentDidUpdate-------------------');
    console.log(previousProps, this.props);
    console.log(previousState, this.state);    
  }

  handleResult = (result) => {
    console.log(`SearchList------------${result.id}`)  
    this.setState({selected:result});
    this.props.onSearch(result)
  }

  render() {

    const results = this.props.results;
    return (
    <div className="search__list">
      {results.map(result => (
        <Link key={result.id} to={`/bird/${result.id}`}>
          <SearchItem result={result} selected={this.state.selected} onList={() => this.handleResult(result)}/>
        </Link>
      ))}
    </div>
  );
};
  }

export default SearchList; 

{/* <button onClick={(e) => this.handleSelect(e, result.id)}>Select</button>  */}