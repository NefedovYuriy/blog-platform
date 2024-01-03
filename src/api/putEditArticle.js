import { instance } from './instance';

export const putEditArticle = async (articleData, slug) => {
  const res = await instance.put(`articles/${slug}`, articleData);
  return res;
};
