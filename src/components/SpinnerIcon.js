import styled from 'styled-components';

import { FaSpinner } from 'react-icons/fa';

export default styled(FaSpinner)`
  display: block;
  font-size: 1.2rem;
  margin: ${props => props.margin};
  color: ${props => props.color};
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  animation: spin 1s infinite linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
