import { Link } from 'react-router-dom';
import CarouselItem from './CarouselItem';

const CarouselList = ({ results }) => {
  return (
    <div className="card__group">
      {results.map(result => (
        <Link key={result.id} to={`/bird/${result.id}`}>
          {/* <h1>{result.id}</h1>             */}
          <CarouselItem result={result} />
        </Link>
      ))}
    </div>
  );
};

export default CarouselList;