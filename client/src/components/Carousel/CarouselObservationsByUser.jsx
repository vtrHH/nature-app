 import React, { Component } from 'react'
 import {listOfObservationsbyUser} from '../../services/observation'
 
 import './Carousel.scss'

 import CarouselList from './CarouselList'
 
 class CarouselObservationsByUser extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          results: null,
          user: this.props.user,
          content : this.props.content
        };        
      }
      
      async componentDidMount() {
        this.getObservationsByUser();
      }

      getObservationsByUser = async () => {
        const results = await listOfObservationsbyUser(this.props.user._id);
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
            {results && (                
                <div className="carousel-container">
                    <CarouselList content={content} results={results} show={show} individual={this.props.user}/>
                </div>
            )}
            </>
         )
     }
 }
 
 export default CarouselObservationsByUser
 