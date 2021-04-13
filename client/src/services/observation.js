import api from './api';

//loads an observation based on the id
export const loadObservation = async (id) => {
  const response = await api.get(`/observation/${id}`);
  return response.data.observation;
};

export const createObservation = async => {
  const response = await api.post('/observation/');
  return response.data.observation;
};

export const editObservation = async (id) => {
  const response = await api.patch(`/observation/${id}/edit`);
  return response.data.observation;
};  

//lists all observation 
//(maybe filtered, sorted, etc in th serverside)
export const listOfObservations = async ()=> {
  const response = await api.get('/observation/list');
  return response.data.observations;
};

