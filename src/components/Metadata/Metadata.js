import React from 'react';
import styled from 'styled-components';

const Metadata = ({ children, className }) => {
  return <div className={`metadata ${className}`}>{children}</div>;
};

export default styled(Metadata)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.3;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  & h6 {
    margin: 0;
    /* font-weight: bold; */
  }
`;
