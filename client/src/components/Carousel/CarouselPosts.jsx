import React, { Component } from 'react';
import { listOfPosts } from '../../services/forum';

import './Carousel.scss';

import CarouselList from './CarouselList';

class CarouselPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      selected: null
    };
  }

  async componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const results = await listOfPosts();
    // console.log(results);
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
            <CarouselList content={content} results={results} show={show} />
          </div>
        )}
      </>
    );
  }
}

export default CarouselPosts;
