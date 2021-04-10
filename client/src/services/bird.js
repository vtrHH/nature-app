import api from './api';

//loads a bird by api_id
export const loadBirdByApiId = async (api_id) => {
  const response = await api.get(`/bird/${api_id}`);
  return response.data;
};

//create entry of bird in our database if not existing --> Not sure if needed, but probably yes
export const createBird = async (data) => {
  const response = await api.post('/bird', data);
  return response.data;
};

//loads all birds (maybe filtered, sorted, etc in th serverside)
export const listOfBirds = async () => {
  const response = await api.get('/bird/list', data);
  return response.data;
};


