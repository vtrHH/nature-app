// import './BirdItem.scss';
import { Link } from 'react-router-dom';
import {Image} from 'react-bootstrap'

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
           
            {!result.pictures[0] ? <img src="https://source.unsplash.com/1600x900/?post" alt={result.title} /> : <img src= {result.pictures[0]} alt={result.title} />}
          </div>
        </Link>
          <div className="carousel-item__details">
          <Link to={`/observation/${result._id}`}>
            <h3>{result.preferred_common_name}</h3>
          </Link>
            <small>
              { new Date(result.addedDate).toLocaleDateString('en-GB')} <br />
             

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
