import React from 'react';
import styled from 'styled-components';

import SocialLinks from '../SocialLinks';
import * as styles from '../../utils/styles';
import CloseButton from '../ModalComponents/CloseButton';
import { graphql, useStaticQuery } from 'gatsby';

const social = graphql`
  {
    accounts: contentfulSocialMedia(ministryArea: { eq: "Church" }) {
      facebook
      instagram
      twitter
    }
  }
`;

const Popup = props => {
  const { className, handleClose } = props;

  const { accounts } = useStaticQuery(social);

  return (
    <div className={className}>
      <CloseButton handleClose={handleClose} />
      <div className="content">
        <h2>Pardon us. We're renovating.</h2>
        <p>
          In the meantime check out any of our social media pages or feel free
          to browse around anyway. Just know you might find some odd stuff here
          and there. We'll get it cleaned up soon, we promise!{' '}
          <span role="img" aria-label="laughing">
            😂
          </span>
        </p>
      </div>
      <StyledSocialLinks accounts={accounts} normal />
    </div>
  );
};

Popup.propTypes = {};

export default styled(Popup)`
  position: relative;
  ${() => styles.flexCol}
  background: var(--white);
  padding: 2rem;
  height: 100%;
  width: 100%;

  .content {
    margin-top: auto;
    ${() => styles.flexCol}
  }

  @media (min-width: 662px) {
    height: auto;
    width: 80%;
    max-width: 800px;
    padding: 4rem 4rem 2rem 4rem;
  }

  & p {
    font-size: 0.9rem;
    :last-of-type {
      margin-bottom: 2rem;
    }
  }
`;

const StyledSocialLinks = styled(SocialLinks)`
  margin-top: auto;

  & > div {
    margin-bottom: 0;
  }

  @media (min-width: 662px) {
    margin-top: 4rem;
  }
`;
