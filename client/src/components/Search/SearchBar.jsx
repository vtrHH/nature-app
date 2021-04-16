import React, { Component } from 'react'
// import './../App.css';

// const SearchBar = (props) => {

//   const handleInputChange = (e) => {
//     const value = e.target.value;        
//     this.props.onSearchBar(value)
//   }

//   return (      
//     <input 
//       type=" search"
//       placeholder="Search here" 
//       value={props.query}
//       onChange={handleInputChange}/>
//     )
// }

// export default SearchBar;

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
  
  // handleClick = (e) => {
  //   e.preventDefault();
  //   console.log('On Search Component button was clicked.');
  //   this.props.onButtonClicked()
  // }

  render() {
    return (
      <div>
       
        <input
          name="q"
          value={this.state.searchTerm}
          placeholder={"Search for birds"}
          onChange={this.handleInputChange}        
        />
        {/* <button onClick={this.handleClick} >Search</button> */}
        
      </div>
    )
  }
}

export default SearchBar
