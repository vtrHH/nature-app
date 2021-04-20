// import './BirdItem.scss';

// import { getHumanReadableGender } from './../common';

// const getHumanReadableGender = gender =>
//   ({ male: 'Male', female: 'Female' }[gender]);

const CarouselItemTaxa = ({ result, show }) => {

  
  // const show = this.props.show;
  // const result = this.props.results;
    
  return (
    <>
    <div className={`carousel-content show-${show}`}>
    <div className="card__carousel-list">
      <div className="carousel-item__img">
          {result.default_photo ? <img src={result.default_photo.square_url} alt={result.name}/> : <img src="https://polartowels.weebly.com/uploads/1/0/0/3/10036170/s233308597275768966_p5_i2_w632.jpeg" alt="" className="placeholder-img"/>}    
        
      </div>
    
        <div className="carousel-item__details">
          <h3>{result.preferred_common_name}</h3>
          <h5>{result.name}</h5>
          {/* <small>
            {result.matched_term} <br/> {result.iconic_taxon_name} | {result.preferred_common_name}
          </small>       */}
        </div>
    </div>
    </div>
    </>
  );
    
};

export default CarouselItemTaxa;

//  <h2 key={bird._id} >{bird.name}</h2>

//  "matched_term": "Kiwi de Mantell",
//  "iconic_taxon_name": "Aves",
//  "preferred_common_name": "North Island Brown Kiwi",

// "default_photo": {
//                 "square_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19650865/square.jpg?1545328695",
//                 "attribution": "(c) Allie_Caulfield, some rights reserved (CC BY)",
//   git a              "flags": [],
//                 "medium_url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19650865/medium.jpg?1545328695",
//                 "id": 19650865,
//                 "license_code": "cc-by",
//                 "original_dimensions": {
//                     "width": 1600,
//                     "height": 1200
//                 },
//                 "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/19650865/square.jpg?1545328695"
//             },