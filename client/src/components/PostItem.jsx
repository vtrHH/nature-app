const PostItem = ({ post }) => {
  return (
    <>
      <div className="card__post-list">
        <div className="post-item__details">
          <h3>{post.title}</h3>
          <small>
            {post.creator.username}
          </small>
        </div>
      </div>
    </>
  );
};

export default PostItem;
