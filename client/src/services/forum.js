import api from './api';

//lists all posts
//(maybe filtered, sorted, etc in th serverside)
export const listOfPosts = async () => {
  const response = await api.get('/forum');
  return response.data.posts;
};

//create an post
export const createPost = async (data) => {
  const response = await api.post('/forum', data);
  return response.data.post;
};

//loads a post and their comments
export const loadPost = async (id) => {
  const response = await api.get(`/forum/${id}`);
  // i return all data because 
  //inside there should be data.post and data.comments
  return response.data;
};

//create a comment on a post
export const createComment = async (data) => {
  const response = await api.post('/forum/${id}', data);
  return response.data.comment;
};
