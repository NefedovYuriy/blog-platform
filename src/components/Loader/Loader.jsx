import React from 'react';
import { Spin } from 'antd';

import classes from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={classes.loader}>
      <Spin size="large" />;
    </div>
  );
};
