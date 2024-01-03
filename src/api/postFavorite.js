import { instance } from './instance';

export const postFavorite = async (slug) => {
  const res = await instance.post(`articles/${slug}/favorite`);
  return res;
};
