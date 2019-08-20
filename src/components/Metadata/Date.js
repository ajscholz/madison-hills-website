import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FaCalendar } from 'react-icons/fa';

const Date = ({ icon, children, className }) => {
  return (
    <h6 className={className}>
      {icon && <FaCalendar style={{ display: 'inline-block' }} />}
      {children}
    </h6>
  );
};

export default styled(Date)`
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
    opacity: 0.8;
    position: relative;
    top: -1px;
  }
`;

Date.propTypes = {
  icon: PropTypes.bool,
};
