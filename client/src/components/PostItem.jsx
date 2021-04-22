const PostItem = ({ post }) => {
  return (
    <>
      <div className="card__post-list">
        <div className="post-item__details">
          <img src="" alt=""/>
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
