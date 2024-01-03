import { instance } from './instance';

export const getArticleEdit = async (slug) => {
  const res = await instance.get(`articles/${slug}`);
  return res;
};
