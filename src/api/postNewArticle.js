import { instance } from './instance';

export const postNewArticle = async (articleData) => {
  const res = await instance.post('articles', articleData);
  return res;
};
