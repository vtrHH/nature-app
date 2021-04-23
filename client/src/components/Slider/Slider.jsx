import { Component } from 'react';

import './Slider.scss';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  navigate = (increment) => {
    this.setState({
      index: Math.min(
        Math.max(this.state.index + increment, 0),
        this.props.pictures.length - 1
      )
    });
  };

  render() {
    const { pictures } = this.props;
    return (
      <>
        <div className={'slider-pictures'}>
          {pictures.length > 1 && (
            <button className="left-arrow" onClick={() => this.navigate(-1)}>
              &lt;
            </button>
          )}

          {pictures.map(
            (url, index) =>
              this.state.index === index && (
                <img key={url} src={url} alt={url}></img>
              )
          )}

          {/* This option returns a console warning: Redundant alt attribute.  
              <img src={pictures[this.state.index]} alt={this.state.index}/> */}

          {pictures.length > 1 && (
            <button className="right-arrow" onClick={() => this.navigate(1)}>
              &gt;
            </button>
          )}
        </div>
      </>
    );
  }
}

export default Slider;
