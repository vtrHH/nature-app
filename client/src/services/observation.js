import api from './api';

//loads an observation based on the id
export const loadObservation = async (id) => {
  const response = await api.get(`/observations/${id}`);
  return response.data;
};

export const createObservation = async => {
    const response = await api.post(`/observations/`);
    return response.data;
  };

export const editObservation = async (id) => {
    const response = await api.get(`/observations/${id}`);
    return response.data.individual;
  };

//lists all observation (maybe filtered, sorted, etc in th serverside)
export const listOfObservations = async ()=> {
    const response = await api.post('/obsercations/list', data);
    return response.data.pet;
  };
