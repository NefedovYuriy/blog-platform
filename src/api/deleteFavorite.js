import { instance } from './instance';

export const deleteFavorite = async (slug) => {
  const res = await instance.delete(`articles/${slug}/favorite`);
  return res;
};
