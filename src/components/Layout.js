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
import 'typeface-nunito-sans';
import { MessageViewProvider } from '../context/MessageViewContext';

import Header from './Header';
import Footer from './Footer';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import GlobalStyles from './GlobalStyles';

import links from '../utils/links';
import PreFooter from './PreFooter';

const Layout = ({ children }) => {
  const data = useStaticQuery(query);
  const width = useBrowserWidth();

  const [sideDrawerOpen, drawerToggleHandler] = useState(false);

  if (width > 662 && sideDrawerOpen) {
    drawerToggleHandler(false);
  }

  return (
    <MessageViewProvider>
      <GlobalStyles />
      <FlexContainer>
        <Header
          siteTitle={data.site.siteMetadata.title}
          drawerClickHandler={() => drawerToggleHandler(() => !sideDrawerOpen)}
        />
        {width <= 662 ? (
          <SideDrawer
            links={links}
            open={sideDrawerOpen}
            click={drawerToggleHandler}
          />
        ) : null}
        {sideDrawerOpen ? <Backdrop click={drawerToggleHandler} /> : null}

        <Main>{children}</Main>

        <PreFooter />
        <Footer title={data.site.siteMetadata.title} />
      </FlexContainer>
    </MessageViewProvider>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100%;
`;

const Main = styled.main`
  flex-grow: 1;
  background: var(--white);
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
