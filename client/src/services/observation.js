import api from './api';

//loads an observation based on the id
export const loadObservation = async (id) => {
  const response = await api.get(`/observation/${id}`);
  return response.data.observation;
};

//create an observation
export const createObservation = async (data) => {
  const response = await api.post('/observation', data);
  return response.data.observation;
};

//create observation from post
export const createObservationFromPost = async (data) => {
  const response = await api.post('/observation/convert', data);
  return response.data.observation;
};

//edits an observation
export const editObservation = async (id) => {
  const response = await api.patch(`/observation/${id}/edit`);
  return response.data.observation;
};

//lists all observation
//(maybe filtered, sorted, etc in th serverside)
export const listOfObservations = async () => {
  const response = await api.get('/observation/list');
  return response.data.observations;
};

//list of observation by one user
export const listOfObservationsbyUser = async (userId) => {
  const response = await api.get(`/observation/user/${userId}`);
  return response.data.observations;
};

//loads all the observations related to one bird
export const loadObservationsByBirdId = async (api_id) => {
  const response = await api.get(`/observation/bird/${api_id}`);
  return response.data.observations;
};

//deletes an observation
export const deleteObservation = async (id) => {
  await api.delete(`/observation/${id}`);
};
