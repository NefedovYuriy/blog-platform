import { instance } from './instance';

export const putEditProfile = async (userData) => {
  const res = await instance.put('user', userData);
  return res;
};
