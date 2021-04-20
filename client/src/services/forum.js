import api from './api';

//lists all posts
//(maybe filtered, sorted, etc in th serverside)
export const listOfPosts = async () => {
  const response = await api.get('/forum');
  return response.data.posts;
};

//create a post
export const createPost = async (data) => {
  const response = await api.post('/forum', data);
  return response.data.post;
};

//loads a post and their comments
export const loadPost = async (id) => {
  const response = await api.get(`/forum/${id}`);
  return response.data.post;
};

//create a comment on a post
export const createComment = async (id, data) => {
  const response = await api.post(`/forum/${id}`, data);
  return response.data.post;
};

//loads answers to this post
export const loadComments = async (id) => {
  const response = await api.get(`/forum/${id}/comments`);
  return response.data.comments;
};
