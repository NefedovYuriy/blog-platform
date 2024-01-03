import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from 'antd';

import { getArticles } from '../../redux/actions/actionCreators';
import { ArticleItem } from '../index';
import { Loader } from '../index';
import { Errors } from '../index';

import classes from './articleList.module.scss';

export const ArticleList = () => {
  const reducerArticles = useSelector((state) => state.reducerArticles);

  const { articles, articlesCount, loading, error, deleted, edited } = reducerArticles;

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles(page));
  }, [dispatch, page, deleted, edited]);

  return (
    <>
      {loading && !error ? <Loader /> : null}
      {error ? <Errors message={error} /> : null}
      <ul className={classes.articles}>
        {articles.map((item) => {
          const { slug } = item;
          return <ArticleItem item={item} key={slug} />;
        })}
      </ul>
      <div className={classes.articles__pagination}>
        <Pagination
          defaultCurrent={1}
          total={articlesCount}
          onChange={(value) => setPage(value)}
          current={page}
          defaultPageSize={5}
          pageSize={5}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};
