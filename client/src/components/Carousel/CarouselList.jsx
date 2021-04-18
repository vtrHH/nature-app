import {Component} from 'react'
import { Link } from 'react-router-dom';
import CarouselItem from './CarouselItem';

class CarouselList extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        index: 0 
        }
      }

  navigate = increment => {
    this.setState({
      index: this.state.index + increment
    })
  }

  render () {
    const show = this.props.show;
    const results = this.props.results;
    return (
     
        <div className="carousel-wrapper">
          <button className="left-arrow" onClick={() => this.navigate(-1)}>
              &lt;
          </button>
            <div className="carousel-content-wrapper">
              <div className={`carousel-content show-${show}`}>
              {results.map((result, index) => (
                this.state.index === index && (
                <Link key={result.id} to={`/bird/${result.id}`}>
                  <CarouselItem result={result} />
                </Link>
                )
              ))}                          
              </div>
            </div>
            <button className="right-arrow" onClick={() => this.navigate(1)}>
          &gt;
      </button>
        </div>
    );
  }
};

export default CarouselList;


// const CarouselList = ({ results }) => {
//   return (
//     <div className="card__group">
//       {results.map(result => (
//         <Link key={result.id} to={`/bird/${result.id}`}>
//           {/* <h1>{result.id}</h1>             */}
//           <CarouselItem result={result} />
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default CarouselList;