import { instance } from './instance';

export const getCurrentUser = async () => {
  const res = await instance.get('user');
  return res;
};
