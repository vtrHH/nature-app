import { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchItem from './SearchItem';
import SearchItemTaxa from './SearchItemTaxa';
import SearchItemObservation from './SearchItemObservation';

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

  handleResult = (result) => {
    console.log(`SearchList------------${result.id}`)  
    this.setState({selected:result});
    this.props.onSearch(result)
  }

  render() {
    const content= this.props.content;
    // console.log(content)
    const results = this.props.results;
    // console.log(results);
    // console.log(Array.isArray(results));
    // console.log(!!results);
    if(results) {          
      console.log(results);
    }
    return (
    <>
    { results && results.length === 0 ? (<div>Sorry, no bird found...</div>) : results ? (
      
      <div className="search__list">
        
        {results.map(result => (
          <Link key={result.id} to={`/bird/${result.id}`}>
            
          {content === "taxa" && (
            <>
            <SearchItemTaxa content={this.props.content}result={result} selected={this.state.selected} onList={() => this.handleResult(result)}/>
            </>
          )}

          {content === "observations" && (
            <>
            <SearchItemObservation content={this.props.content}result={result} selected={this.state.selected} onList={() => this.handleResult(result)}/>
            </>
          )}

          {content === "" && (
            <>
            <SearchItem content={this.props.content}result={result} selected={this.state.selected} onList={() => this.handleResult(result)}/>
            </>
          )}

          </Link>
        ))}
      </div>
      ) : (<div></div>)
    }
    </>
  );
};
  }

export default SearchList; 

