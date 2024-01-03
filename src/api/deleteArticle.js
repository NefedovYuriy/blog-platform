import { instance } from './instance';

export const deleteArticle = async (slug) => {
  const res = await instance.delete(`articles/${slug}`);
  return res;
};
