// import './BirdItem.scss';

const BirdItem = ({ bird }) => {
  return (
    <>
      <div className="card__bird-list">
        <div>
          {bird.default_photo ? (
            <img src={bird.default_photo.square_url} alt={bird.name} />
          ) : (
            <img src="" alt="" />
          )}
        </div>

        <div className="bird-item__details">
          <h3>{bird.preferred_common_name}</h3>
          <h5>{bird.name}</h5>
          <small>
            {bird.matched_term} <br /> {bird.iconic_taxon_name} |{' '}
            {bird.preferred_common_name}
          </small>
        </div>
      </div>
    </>
  );
};

export default BirdItem;
