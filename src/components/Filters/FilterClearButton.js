import React from 'react';
import styled from 'styled-components';

const FilterClearButton = ({ children, click, className, disabled }) => {
  return (
    <button className={className} onClick={() => click()} disabled={disabled}>
      {children}
    </button>
  );
};

export default styled(FilterClearButton)`
  border: 0;
  display: flex;
  align-items: center;
  padding: 0.35em;
  border-radius: 50px;
  &:disabled {
    background: #ffb9ac;
    cursor: default;
  }
`;
