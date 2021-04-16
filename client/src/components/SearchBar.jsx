import React, { Component } from 'react'

// import { searchSpecie } from './../services/i-nature-api';

export class SearchBar extends Component {

  state= {
    search:'',
    birds: []
  }

  handleSearchInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      search : value      
    })
    this.props.onSearchBar(e.target.value)
  }
  

  handleClick = (e) => {
    e.preventDefault();
    console.log('On Search Component button was clicked.');
    this.props.onButtonClicked()
    // const search = this.state.search;
    // const birds = await searchSpecie(search);
    // console.log(`launchSearch runs search= ${search}`)
    // this.setState({
      // birds: birds
    // })
  }

  render() {
    return (
      <div>
       
        <input
          name="q"
          value={this.state.search}
          placeholder={"Search for birds"}
          onChange={this.handleSearchInputChange}        
        />
        <button onClick={this.handleClick} >Search</button>
        
      </div>
    )
  }
}

export default SearchBar
