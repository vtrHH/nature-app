import api from './api';

//loads the profile information of an individual
export const loadIndividual = async (id) => {
  const response = await api.get(`/individual/${id}`);
  return response.data.individual;
};

//loads the profile information of an organisation
export const loadOrganisation = async (id) => {
  const response = await api.get(`/organisation/${id}`);
  return response.data.individual;
};


