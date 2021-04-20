import { Link } from 'react-router-dom';
import PostItem from './PostItem';

const PostList = ({ posts }) => {  
  return (

    <div className="card__group">
    
      {posts.map(post => (
        <Link key={post._id} to={`/forum/${post._id}`}>
          <PostItem post={post} />
        </Link>
      ))}
    </div>
  );
};

export default PostList;