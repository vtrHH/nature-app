import React, { Component } from 'react'

export class SearchBar extends Component {

  state= {
    searchTerm:''
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchTerm : value      
    })
    this.props.onSearchBar(e.target.value)
  }

  render() {
    
    let content = ""
    if (this.props.content === "taxa") {
      content = "Birds";
    } else if (this.props.content === "observations") {
      content = "Observations";
    } else {
      content = "";
    }
    // let content = (this.props.content === "taxa") ? (this.props.content === "observations" ? "Observations") : "Birds";
   
    return (
      <div className="searchbar">
       {content !== "" ? (<label htmlFor="q">Search {content}</label>) : (<label htmlFor="q"></label>) }
        <input
          name="q"
          value={this.state.searchTerm}
          placeholder={`Search ${content}`}
          onChange={this.handleInputChange}        
        />
        
      </div>
    )
  }
}

export default SearchBar
