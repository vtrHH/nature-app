import "./BirdItem.scss";
import { Card } from "react-bootstrap";

const BirdItem = ({ bird }) => {
  return (
    <>
      <Card style={{ width: "10em", marginBottom: "1em" }}>
        {bird.default_photo ? (
          <Card.Img
            style={{ width: "100%" }}
            variant="top"
            src={bird.default_photo.square_url}
            alt={bird.name}
          />
        ) : (
          <Card.Img src="" alt="" />
        )}
        <Card.Body style={{ marginBottom: 0 }}>
          <Card.Title>{bird.preferred_common_name}</Card.Title>
          <Card.Text>{bird.name}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ marginBottom: 0, paddingTop: 0 }}>
          <small>
            {bird.matched_term} <br /> {bird.iconic_taxon_name} |{" "}
            {bird.preferred_common_name}
          </small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default BirdItem;
//   return (
//     <>
//       <div className="card__bird-item">
//         <div>
//           {bird.default_photo ? (
//             <img src={bird.default_photo.square_url} alt={bird.name} />
//           ) : (
//             <img src="" alt="" />
//           )}
//         </div>

//         <div className="bird-item__details">
//           <h3>{bird.preferred_common_name}</h3>
//           <h5>{bird.name}</h5>
//           <small>
//             {bird.matched_term} <br /> {bird.iconic_taxon_name} |{' '}
//             {bird.preferred_common_name}
//           </small>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BirdItem;
