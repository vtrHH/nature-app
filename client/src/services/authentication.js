import api from './api';

//signs a user in
export const signIn = async (data) => {
  const response = await api.post('/authentication/sign-in', data);
  const body = response.data;
  const user = body.user;
  return user;
};

//signs a user up
export const signUp = async (data) => {
  const response = await api.post('/authentication/sign-up', data);
  const body = response.data;
  const user = body.user;
  return user;
};

//signs a user out
export const signOut = async ()  => {
  await api.post('/authentication/sign-out');
};

//verifies if a user is signed in
export const verify = async () => {
  const response = await api.get('/authentication/verify');
  return response.data.user;
};