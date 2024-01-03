import { instance } from './instance';

export const getArticleFull = async (slug) => {
  const res = await instance.get(`articles/${slug}`);
  return res;
};
