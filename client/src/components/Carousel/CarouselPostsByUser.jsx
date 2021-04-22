import React, { Component } from 'react';
import { listOfPosts } from '../../services/forum';

import './Carousel.scss';

import CarouselList from './CarouselList';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      user: this.props.user,
      content : this.props.content
    };
  }

  async componentDidMount() {
    this.getPostsByUserId();
  }

  getPostsByUserId = async () => {
    const results = await listOfPosts();
    // console.log(results);
    this.setState({
      results: results
    });
  };

  render() {
    const show = this.props.show;
    const content = this.props.content;
    const user = this.props.user;
    const results = this.state.results;
    return (
      <>       
        {results && (
          <div className="carousel-container">
            <CarouselList content={content} results={results} show={show} user={user}/>
          </div>
        )}
      </>
    );
  }
}

export default Carousel;
