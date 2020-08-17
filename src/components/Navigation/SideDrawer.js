import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { graphql, useStaticQuery } from 'gatsby';

import Navigation from '.';
import SocialLinks from './SocialLinks';

import { FaTimes } from 'react-icons/fa';

const SideDrawer = ({ click, open, className }) => {
  const { accounts } = useStaticQuery(socialAccounts);
  const toggle = useSpring({
    transform: open ? 'translateX(0)' : 'translateX(105%)',
    // config: { clamp: true, mass: 1, tension: 120, friction: 16 },
  });
  return (
    <StyledSideDrawer style={toggle}>
      <StyledButton onClick={() => click(false)}>
        <span>
          <StyledIcon alt="close nav" />
        </span>
      </StyledButton>

      <Navigation click={click} sideDrawer />

      <StyledSocialLinks accounts={accounts} className={className} />
    </StyledSideDrawer>
  );
};

const StyledSideDrawer = styled(animated.div)`
  height: 100%;
  /* background: var(--white); */
  background: rgba(242, 238, 238, 0.85);
  backdrop-filter: blur(6px);
  box-shadow: var(--shadow4);
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  z-index: 2000;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

const StyledSocialLinks = styled(SocialLinks)`
  position: unset;
  transform: none;
  left: unset;
  top: unset;
  grid-gap: 1rem;
  margin-top: auto;
`;

export default SideDrawer;

const socialAccounts = graphql`
  {
    accounts: contentfulSocialMedia(ministryArea: { eq: "Church" }) {
      facebook
      instagram
      twitter
    }
  }
`;
