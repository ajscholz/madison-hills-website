import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DrawerToggleButton from '../Buttons/DrawerToggleButton';
import Navigation from '../Navigation';
import { useBrowserWidth } from '../../context/BrowserWidthContext';

const data = graphql`
  {
    logo: file(name: { eq: "logo" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Header = ({ siteTitle, drawerClickHandler }) => {
  const { logo } = useStaticQuery(data);

  const width = useBrowserWidth();

  return (
    <StyledHeader>
      <StyledLogoLink to="/">
        <StyledImage fluid={logo.childImageSharp.fluid} alt={siteTitle} />
      </StyledLogoLink>
      {width > 662 ? <Navigation /> : null}
      {width < 663 ? <DrawerToggleButton click={drawerClickHandler} /> : null}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: 0;
  position: fixed;
  z-index: 1000;
  width: 100%;
  background: var(--white);
  opacity: 0.7;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: 663px) {
    /* flex-direction: column; */
    align-items: center;
  }
`;

const StyledLogoLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledImage = styled(Img)`
  width: 80px;
  @media (min-width: 663px) {
    width: 110px;
    margin: 0.5rem;
  }
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
