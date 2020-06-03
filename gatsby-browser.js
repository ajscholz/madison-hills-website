/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require('react');

const BrowserWidthProvider = require('./src/context/BrowserWidthContext');
const { ModalContextProvider } = require('./src/context/ModalContext');

exports.wrapRootElement = ({ element }) => (
  <ModalContextProvider>
    <BrowserWidthProvider.default>{element}</BrowserWidthProvider.default>
  </ModalContextProvider>
);

// used to verify this was actually someone from a browser, not a bot filling out forms
exports.onInitialClientRender = () => {
  if (typeof window !== 'undefined') {
    const myStore = window.localStorage;
    myStore.setItem('real', true);
  }
};
