import React from 'react';

import Section from '../Sections/Section';
import SocialLinks from '../Navigation/SocialLinks';
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

export default () => {
  const { accounts } = useStaticQuery(social);
  return (
    <Section
      className="prefooter"
      style={{
        background: 'var(--tertiary)',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      <SocialLinks accounts={accounts} normal muted small />
    </Section>
  );
};
