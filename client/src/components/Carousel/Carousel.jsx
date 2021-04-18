 import React, { Component } from 'react'
 import {searchApi} from '../../services/i-nature-api'
 
 import './Carousel.scss'

 import CarouselList from './CarouselList'
 
 class Carousel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          searchQuery: null,
          results: null,
          selected: null,
          options: {
            route: 'taxa',
            q: null,
            is_active: true,
            taxon_id: 3,
            rank: 'species%2Csubspecies',
            per_page: 15,
            order: 'desc',
            order_by: 'created_at'
          }
        };
      }
    
      async componentDidMount() {
        this.launchSearch()
      }

      launchSearch = async () => {
        const search = this.state.searchQuery;
        const options =this.state.options;
        const results = await searchApi(search, options);
        console.log(`launchSearch on Parent search= ${search}`);
        this.setState({
            results: results
        });
      };

      // 'https://api.inaturalist.org/v1/observations?per_page=50&order=desc&order_by=created_at'

      
        // export const searchSpecie = async(query, options) => {
        //     const response = await axios.get(
        //         `https://api.inaturalist.org/v1/taxa?q=${query}&is_active=true&taxon_id=3&rank=species%2Csubspecies`
        //     );
        //     return response.data.results;
        // };


     render() {
         const show = this.props.show
         const results = this.state.results;
         return (
            <>
            {results && (                
                <div className="carousel-container">
                    <CarouselList results={results} show={show}/>
                </div>
            )}
            </>
         )
     }
 }
 
 export default Carousel
 