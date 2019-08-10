/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { useBrowserWidth } from '../context/BrowserWidthContext';

import Header from './Header';
import Footer from './Footer';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import GlobalStyles from './GlobalStyles';

import links from '../utils/links';
import PreFooter from './PreFooter';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const width = useBrowserWidth();

  const [sideDrawerOpen, drawerToggleHandler] = useState(false);

  if (width > 662 && sideDrawerOpen) {
    drawerToggleHandler(false);
  }

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <Header
          siteTitle={data.site.siteMetadata.title}
          drawerClickHandler={() => drawerToggleHandler(!sideDrawerOpen)}
        />
        {width <= 662 ? (
          <SideDrawer
            links={links}
            open={sideDrawerOpen}
            click={drawerToggleHandler}
          />
        ) : null}
        {sideDrawerOpen ? (
          <StyledBackdrop
            onClick={() => drawerToggleHandler(!sideDrawerOpen)}
          />
        ) : null}

        <Main>{children}</Main>

        <PreFooter />
        <Footer title={data.site.siteMetadata.title} />
      </FlexContainer>
    </>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100%;
`;

const StyledBackdrop = styled(Backdrop)`
  @media (min-width: 663px) {
    display: none;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  background: var(--white);
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
