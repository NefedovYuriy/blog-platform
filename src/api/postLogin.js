import { instance } from './instance';

export const postLogin = async (userData) => {
  const res = await instance.post('users/login', userData);
  return res;
};
