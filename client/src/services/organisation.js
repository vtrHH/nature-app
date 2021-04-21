import api from './api';

//loads the profile information of an organisation
export const loadOrganisation = async (id) => {
  const response = await api.get(`/organisation/${id}`);
  return response.data;
};

//loads a list of organisation
export const listOfOrganisation = async () => {
  const response = await api.get(`/organisation/list`);
  return response.data.organisations;
};

//edit the information of an organisation
export const editOrganisation = async (id, data) => {
  console.log(data);
  const response = await api.patch(`/organisation/${id}`, data);
  return response.data;
};

//edit the birds of an organisation
export const editBirdsInOrganisation = async (data) => {
  const response = await api.patch(`/organisation/birds`, data);
  return response.data.organisation;
};
