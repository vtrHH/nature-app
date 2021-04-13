import api from './api';

//loads the profile information of an individual
export const loadIndividual = async (id) => {
  const response = await api.get(`/individual/${id}`);
  return response.data.individual;
};

//edit the information of an individual
export const editIndividual = async (id, data) => {
  const response = await api.patch(`/individual/${id}/edit`, data);
  return response.data.individual;
};

//edit the preferences of an individual
export const editBirdsInOrganisation = async (data) => {
  const response = await api.patch(`/individual/preferences`, data);
  return response.data.individual;
};