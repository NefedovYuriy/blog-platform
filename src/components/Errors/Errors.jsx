import React from 'react';
import { Alert } from 'antd';

import classes from './errors.module.scss';

export const Errors = ({ message }) => {
  return (
    <div className={classes.error}>
      <Alert message="Error" description={message} type="error" showIcon />
    </div>
  );
};
