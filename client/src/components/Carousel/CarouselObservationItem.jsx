// import './BirdItem.scss';
import { Link } from 'react-router-dom';
// import { getHumanReadableGender } from './../common';

// const getHumanReadableGender = gender =>
//   ({ male: 'Male', female: 'Female' }[gender]);

const CarouselItemObservation = ({ result, show, user, individual }) => {
  // console.log("CarouselItemObservation")
  // console.log(result)
  // console.log(user)

  // const show = this.props.show;
  // const result = this.props.results;
  // const user = this.props.user;

  return (
    <>
      <div className={`carousel-content show-${show}`}>
        <div className="card__carousel-list">
        <Link to={`/observation/${result._id}`}>
          <div className="carousel-item__img">
            {/* {result.taxon.default_photo ? <img src={result.taxon.default_photo.square_url} alt={result.name}/> : <img src="https://polartowels.weebly.com/uploads/1/0/0/3/10036170/s233308597275768966_p5_i2_w632.jpeg" alt="" className="placeholder-img"/>}     */}
            {/* <img
              src="https://source.unsplash.com/1600x900/?bird"
              alt="nice bird"
            /> */}
            {!result.pictures[0] ? <img src="https://source.unsplash.com/1600x900/?post" alt={result.title} /> : <img src= {result.pictures[0]} alt={result.title} />}
          </div>
        </Link>
          <div className="carousel-item__details">
          <Link to={`/observation/${result._id}`}>
            <h3>{result.preferred_common_name}</h3>
            {/* <h5>{result.taxon.name}</h5> */}
          </Link>
            <small>
              { new Date(result.addedDate).toLocaleDateString('en-GB')} <br />
              {/* <span>Obervation date: { new Date(result.addedDate).toLocaleDateString('en-GB', options)}</span> */}

            </small>
            <Link to={`/individual/${user._id}`}>
              
            <div className="carousel_item__user">
            {user.profilePicture ? <img src={user.profilePicture} alt={user.username}/> : <img src="https://source.unsplash.com/300x300/?smiling,woman" alt={user.username}/>}
             <strong>
             {user.username}

             </strong> 

            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselItemObservation;

// {annotations: Array(0), cached_votes_total: 0, capt…}

// annotations
// :
// []
// new entry
// cached_votes_total
// :
// 0
// captive
// :
// false

// comments
// :
// []
// comments_count
// :
// 0
// community_taxon_id
// :
// null
// created_at
// :
// "2021-04-19T11:18:24+02:00"

// created_at_details
// :
// {date: "2021-04-19", day: 19, hour: 11, month: 4, w…}
// created_time_zone
// :
// "Europe/Paris"
// description
// :
// null

// faves
// :
// []
// faves_count
// :
// 0

// flags
// :
// []

// geojson
// :
// {coordinates: Array(2), type: "Point"}
// geoprivacy
// :
// null
// id
// :
// 74498029

// ident_taxon_ids
// :
// [48460, 1, 2, 355675, 3]

// identifications
// :
// [{…}]
// identifications_count
// :
// 0
// identifications_most_agree
// :
// false

// identifications_most_disagree
// :
// false

// identifications_some_agree
// :
// false

// license_code
// :
// "cc-by-nc-nd"
// location
// :
// "6.9117258718,2.4007287962"
// map_scale
// :
// null
// mappable
// :
// true

// non_owner_ids
// :
// []
// num_identification_agreements
// :
// 0
// num_identification_disagreements
// :
// 0
// oauth_application_id
// :
// null
// obscured
// :
// false

// observation_photos
// :
// [{…}]
// observed_on
// :
// "2020-03-08"

// observed_on_details
// :
// {date: "2020-03-08", day: 8, hour: 12, month: 3, we…}
// observed_on_string
// :
// "2020/03/08 12:00 PM CET"
// observed_time_zone
// :
// "Europe/Paris"

// ofvs
// :
// []

// outlinks
// :
// []
// owners_identification_from_vision
// :
// false

// photos
// :
// [{…}]
// place_guess
// :
// "Bonou, BJ-OU, BJ"

// place_ids
// :
// [8509, 11333, 15066, 59647, 91708, 97392]
// positional_accuracy
// :
// 31

// preferences
// :
// {prefers_community_taxon: null}

// project_ids
// :
// []

// project_ids_with_curator_id
// :
// []

// project_ids_without_curator_id
// :
// []

// project_observations
// :
// []
// public_positional_accuracy
// :
// 31
// quality_grade
// :
// "needs_id"

// quality_metrics
// :
// []

// reviewed_by
// :
// [384877]
// site_id
// :
// 1

// sounds
// :
// []
// spam
// :
// false

// species_guess
// :
// "Birds"

// tags
// :
// []

// taxon
// :
// {ancestor_ids: Array(5), ancestry: "48460/1/2/35567…}
// taxon_geoprivacy
// :
// null
// time_observed_at
// :
// "2020-03-08T12:00:00+01:00"
// time_zone_offset
// :
// "+01:00"
// updated_at
// :
// "2021-04-19T11:18:25+02:00"
// uri
// :
// "https://www.inaturalist.org/observations/74498029"

// user
// :
// {activity_count: 1459, created_at: "2016-12-30T15:3…}
// uuid
// :
// "479cfd70-beab-4acd-b0ff-d1777b5bfb5f"

// votes
// :
// []
