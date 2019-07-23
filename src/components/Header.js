import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DrawerToggleButton from './DrawerToggleButton';
import Navigation from './Navigation';
import { useBrowserWidth } from '../context/BrowserWidthContext';

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
        <StyledImage
          fluid={logo.childImageSharp.fluid}
          alt={siteTitle}
        ></StyledImage>
      </StyledLogoLink>
      {width > 662 ? <Navigation /> : null}
      {width < 663 ? <DrawerToggleButton click={drawerClickHandler} /> : null}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: 0;
  background: var(--white);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: 663px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLogoLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
`;

const StyledImage = styled(Img)`
  width: 100px;
  @media (min-width: 663px) {
    margin-bottom: 1rem;
  }
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
