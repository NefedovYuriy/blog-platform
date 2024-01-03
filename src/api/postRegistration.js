import { instance } from './instance';

export const postRegistration = async (userData) => {
  const res = await instance.post('users', userData);
  return res;
};
