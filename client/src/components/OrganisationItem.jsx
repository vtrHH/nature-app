import defaultImage from './assets/organisation-default-picture.png';
import { Row, Col, Image } from 'react-bootstrap';
import './OrganisationItem.scss';

const OrganisationItem = ({ organisation }) => {
  console.log(organisation);
  const itemPicture = organisation.pictures[0];
  return (
    <>
      <Row>
        <Col className="organisationItem" md={12}>
          {/* <Row>           
            <Col md={{ span: 6, offset: 3 }} className="text-center" > */}
          <div class="organisationProfile">
            <Image
              className="thumbnail"
              src={organisation.profilePicture}
              alt={organisation.username}
            />
          </div>

          <div className="organisation-item__details">
            {organisation.organisationName ? (
              <h3>{organisation.organisationName}</h3>
            ) : (
              <h3>{organisation.username}</h3>
            )}
            <p>{organisation.description}</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

/* <div className="card__post-list">
        <div className="post-item__details">
          {organisation.organisationName ? (
            <h3>{organisation.organisationName}</h3>
          ) : (
            <h3>{organisation.username}</h3>
          )}
          <p>{organisation.description}</p>
          {organisation.pictures ? (
            <img src={itemPicture} alt={organisation.username} />
          ) : (
            <img src={defaultImage} alt={organisation.username} />
          )}
*/

export default OrganisationItem;
