// import './BirdItem.scss';

// import { getHumanReadableGender } from './../common';

// const getHumanReadableGender = gender =>
//   ({ male: 'Male', female: 'Female' }[gender]);

const SearchItem = ({ result }) => {
    
  return (
    <>
    <div className="search__bird-list">
      <div >
          {result.default_photo ? <img src={result.default_photo.square_url} alt={result.name}/> : <img src="" alt=""/>}    
        
      </div>
    
        <div className="search-item__details">
          <h3>{result.preferred_common_name}</h3>
          <h5>{result.name}</h5>
          <small>
            {result.matched_term} <br/> {result.iconic_taxon_name} | {result.preferred_common_name}
          </small>      
        </div>
    </div>
    </>
  );
    
};

export default SearchItem;

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