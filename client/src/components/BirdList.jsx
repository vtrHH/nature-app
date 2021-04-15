import { Link } from 'react-router-dom';
import BirdItem from './BirdItem';

const BirdList = ({ birds }) => {
  return (
    <div className="card__group">
      {birds.map(bird => (
        <Link key={bird.id} to={`/bird/${bird.id}`}>
          <BirdItem bird={bird} />
        </Link>
      ))}
    </div>
  );
};

export default BirdList;