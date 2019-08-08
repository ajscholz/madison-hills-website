import React from 'react';
import Button from './Button';

export default props => {
  return (
    <a href={props.link}>
      <Button style={{ margin: '1rem' }}>{props.children}</Button>
    </a>
  );
};
