import { instance } from './instance';

export const getAllArticles = async (offset) => {
  const count = 5;
  if (offset === 1) offset = 0;
  else offset = offset * count - count;
  const res = await instance.get('articles', {
    params: {
      limit: 5,
      offset,
    },
  });
  return res;
};
