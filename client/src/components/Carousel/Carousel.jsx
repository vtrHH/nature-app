 import React, { Component } from 'react'
 import {searchApi} from '../../services/i-nature-api'
 
 import './Carousel.scss'

 import CarouselList from './CarouselList'
 
 class Carousel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          searchQuery: this.props.searchQuery,
          results: null,
          selected: null,
          options: {
            route: 'taxa',
            q: null,
            is_active: true,
            taxon_id: 3,
            rank: 'species%2Csubspecies',
            per_page: 12,
            order: 'desc',
            order_by: 'created_at'
          }
        };
      }
    
      async componentDidMount() {
        this.launchSearch()
      }

      launchSearch = async () => {
        let query = this.props.options.q;
        if (query === null) {
          query = "";
      };
        // const query = this.props.options.q;
        const options =this.props.options;
        const results = await searchApi(query, options);
        console.log(`launchSearch on Parent search= ${query}`);
        this.setState({
            results: results
        });
      };



     render() {
         const show = this.props.show;
         const content = this.props.content;
         const results = this.state.results;
         return (
            <>
             {this.props.content === "taxa" && (
                <>
                <h2 style={{fontSize:"2em", marginBottom:"0px"}}>Latest Birds</h2>
                </>
             )}
             {this.props.content === "observations" && (
                <>
                <h2 style={{fontSize:"2em", marginBottom:"0px"}}>Latest Observations</h2>
                </>
             )}
            {results && (                
                <div className="carousel-container">
                    <CarouselList content={content} results={results} show={show}/>
                </div>
            )}
            </>
         )
     }
 }
 
 export default Carousel
 