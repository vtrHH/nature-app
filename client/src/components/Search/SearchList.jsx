import { Link } from 'react-router-dom';
import SearchItem from './SearchItem';

const SearchList = ({ results }) => {
  return (
    <div className="search__list">
      {results.map(result => (
        <Link key={result.id} to={`/bird/${result.id}`}>
          <SearchItem result={result} />
        </Link>
      ))}
    </div>
  );
};

export default SearchList; 