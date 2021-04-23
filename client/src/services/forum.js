import api from './api';

//lists all posts
//(maybe filtered, sorted, etc in th serverside)
export const listOfPosts = async () => {
  const response = await api.get('/forum');
  return response.data.posts;
};

//list all post by one user
export const listOfPostsByUser = async (userId) => {
  const response = await api.get(`/forum/user/${userId}`);
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

//deletes a post
export const deletePost = async (id) => {
  await api.delete(`/forum/${id}`);
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

//delete comments based on the related post Id
export const deleteCommentsByPost = async (postId) => {
  await api.delete(`/forum/${postId}/comments`);
};
