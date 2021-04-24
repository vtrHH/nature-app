import { Row, Col, Image } from "react-bootstrap";
import "./OrganisationItem.scss";

const OrganisationItem = ({ organisation }) => {
  return (
    <>
     <Row>
        <Col className="organisationItem" md={12}>
        {/* <Row>           
            <Col md={{ span: 6, offset: 3 }} className="text-center" > */}
            <div class="organisationProfile">
            <Image className="thumbnail" src={organisation.profilePicture} alt={organisation.username}  />
            </div>
      
        <div className="organisation-item__details">
          <h3>{organisation.username}</h3>
        </div>
     
      </Col>
      </Row>
    </>
  );
};

export default OrganisationItem;
