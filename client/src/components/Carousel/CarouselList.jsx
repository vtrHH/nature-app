import {Component} from 'react'
import { Link } from 'react-router-dom';
// import CarouselItemTaxa from './CarouselItemTaxa';
import CarouselPostItem from './CarouselPostItem';
import CarouselObservationItem from './CarouselObservationItem';

class CarouselList extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        index: 0 
        }
      }

  navigate = increment => {
    this.setState({
      index: Math.min(Math.max(this.state.index + increment, 0), this.props.results.length -this.props.show)
    })
  }

  render () {
    const show = this.props.show;
    const results = this.props.results;
    const individual = this.props.individual;
    // console.log(results)
    return (

      <>
      {results && (
        <div className="carousel-wrapper">
          <button className="left-arrow" onClick={() => this.navigate(-1)}>
              &lt;
          </button>
            <div className="carousel-content-wrapper">
              <div className={`carousel-content show-${show}`} style={{ transform: `translateX(-${this.state.index * 100 / show}%)` }}>
              {this.props.content === "posts" && (
                <>
                {results.map((result, index) => (
                    <Link key={result._id} to={`/forum/${result._id}`}>
                    <CarouselPostItem key={result._id} result={result} show={show} user={result.creator}/>
                    </Link>
                ))}                          
                </>
              )}
              {this.props.content === "observations" && (
                <>
                {results.map((result, index) => (
                    //<Link key={result.id} to={`/observations/${result._id}`}>
                    
                    <CarouselObservationItem key={result._id} result={result} show={show} individual={individual} user={result.creator}/>
                    
                ))}                          
                </>
              )}
              
              </div>
            </div>
            <button className="right-arrow" onClick={() => this.navigate(1)}>
          &gt;
      </button>
        </div>
      )}
        </>
     
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