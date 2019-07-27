import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import Navigation from './Navigation';

import { FaTimes } from 'react-icons/fa';

const SideDrawer = ({ click, open }) => {
  const toggle = useSpring({
    transform: open ? 'translateX(0)' : 'translateX(105%)',
  });
  return (
    <StyledSideDrawer style={toggle}>
      <StyledButton onClick={() => click(false)}>
        <span>
          <StyledIcon alt="close nav" />
        </span>
      </StyledButton>

      <Navigation click={click} sideDrawer />
    </StyledSideDrawer>
  );
};

const StyledSideDrawer = styled(animated.div)`
  height: 100%;
  background: var(--white);
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  z-index: 200;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* transition: transform 0.3s ease-out; */
  /* transform: ${props =>
    props.open ? 'translateX(0)' : 'translateX(105%)'}; */
  @media (min-width: 663px) {
    display: none;
  }
`;

const StyledButton = styled.button`
  padding: 0;
  margin-bottom: 1rem;
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(FaTimes)`
  font-size: 2rem;
  color: var(--primary);
`;

export default SideDrawer;
