import { Row, Col, Image, Button } from "react-bootstrap";
import "./PostItem.scss";

const PostItem = ({ post }) => {
  const user = post.creator;
  return (
    <>
      <Row>
        <Col className="postItem mb-0" md={12}>
          <div>
          <div className="post_item__user">
            {user.profilePicture ? (
              <Image roundedCircle  src={user.profilePicture} alt={user.username} />
            ) : (
              <Image
                roundedCircle 
                src="https://source.unsplash.com/300x300/?smiling,woman"
                alt={user.username}
              />
            )}
            <strong>{user.username}</strong>
          </div>
          <div>
            <img src="" alt="" />
            <h3>{post.title}</h3>
            <small>
              {new Date(post.addedDate).toLocaleDateString("en-GB")} <br />
            </small>
          </div>
          <div className="postButton">
          <Button>
            View
          </Button>

          </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PostItem;
