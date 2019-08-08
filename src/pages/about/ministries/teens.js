import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import HeroImage from '../../../components/HeroImage';
import Section from '../../../components/Section';
import Title from '../../../components/Title';
import Seo from '../../../components/Seo';
import Button from '../../../components/Button';
import MinistryList from '../../../components/MinistryList';
import TextMessageButton from '../../../components/TextMessageButton';
import SocialLinks from '../../../components/SocialLinks';

export const data = graphql`
  {
    hero: contentfulPageBannerImages(page: { eq: "Teens" }) {
      image: pageBannerImage {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
    programs: allContentfulPrograms(
      filter: { ministryArea: { eq: "Teens" } }
      sort: { fields: createdAt, order: ASC }
    ) {
      edges {
        program: node {
          id
          title
          dayOfWeek
          startTime
          endTime
          location
          ageRange
          description {
            description
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const Teens = ({ data }) => {
  const socialMedia = [
    {
      platform: 'facebook',
      link: 'https://www.facebook.com/madisonhillsteens',
    },
    {
      platform: 'twitter',
      link: 'https://www.twitter.com/mhteens',
    },
    {
      platform: 'instagram',
      link: 'https://www.instagram.com/mh_teens',
    },
  ];

  return (
    <>
      <Seo
        title="Teen Ministry  |  Madison Hills Christian Church"
        image={data.hero.image.src}
      />
      <HeroImage image={data.hero.image.fluid} backgroundPosition="45% 27%">
        Teen Ministry
      </HeroImage>
      <Section style={{ paddingTop: '6rem' }}>
        <Title>Who We Are</Title>
        <div>{`We lead teens to a closer relationship with Jesus Christ.`}</div>
        <h3>Ages</h3>
        <div>{`
        Middle School: 6th-8th grade
        `}</div>
        <div>{`High School: 9th-12th grade`}</div>
        <div>
          {`I Timothy 4:12-13
12 Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity. 13 Until I come, devote yourself to the public reading of Scripture, to preaching and to teaching.”`}
        </div>
        <h3>Follow us</h3>
        <div>Facebook: madisonhillsteens </div>
        <div>Twitter: @mhteens</div>
        <div>Instagram: MH_Teens</div>
        <div>– or –</div>
        <div>Email the Teen Minister: jeremy@madisonhills.org</div>
        <div>
          We are very excited to get to know you teen(s) and welcome them into
          our Teen Ministry!
        </div>
      </Section>

      <MinistryList programs={data.programs.edges} />

      <Section dark>
        <Title>What We Do</Title>
        <div>{`#MHTeens would like to invite all Teens to join some of our Weekly Programming:`}</div>
        <h3>SYNC – 10:45 am</h3>
        <div>
          {`Every Sunday Morning we have a fun and exciting time of Bonding, Bible Study, Food for All Teens!<br>Most Sundays, we will have opportunities for Middle School Students to be With other Middle Schools and High School students to be with other High School Students!  The first Sunday of every month, ALL Teens will enjoy some time in one large Group!`}
        </div>
        <h3>Growth Groups</h3>
        <div>6:30 pm – 7:30 pm</div>
        <div>
          Wednesdays are about Growing closer to God and to each other! Students
          will experience a “light” Dinner, along with a Small Group Experience!
        </div>
        <h3>Special Activities</h3>
        <div>
          We love to spend time together and welcome ALL teens to join in our
          special events! We have something fun, exciting, friendship building,
          memory making at least one a month, sometimes more!
        </div>
      </Section>

      <Section>
        <Title>Stay In the Loop</Title>
        <div>
          Text "@TeensMHCC" to 81010 or click the button below to join our text
          list.
        </div>
        <TextMessageButton link="sms://81010?body=%40TeensMHCC">
          Text Us Now
        </TextMessageButton>
      </Section>

      <Section>
        <Title>What's Coming</Title>
        <h3>Check Out our 2018-2019 Theme</h3>
        <div>{`We are very excited about our New Theme…which kicks off the end of August!  We are currently planning so many wonderful events, lessons, experiences that will help Students identify who they are!`}</div>
        <h3>
          <a
            href="https://drive.google.com/open?id=19jMRPwwi_eqz7sLDNbf5DdiNkwp0jfja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teen Ministry Brochure
          </a>
        </h3>
        <h3>Mission Trip</h3>
        <div>
          {`Every Summer we go to a wonderful city and do amazing projects, meet new people and serve those that need served!  These trips are 5-6 days, having amazing experiences, bonding with our group and making memories that will last a lifetime!`}
          <br />
          {`This Summer, we took  27 Teens and 6 Adults to Niagara Falls…and had an amazing week!`}
        </div>
        <h3>Check out our Videos…</h3>
        <div>
          <a
            href="https://youtu.be/Z-I8qhwYmQk"
            target="_blank"
            rel="noopener noreferrer"
          >{`Niagara Falls (#1)`}</a>
        </div>
        <div>
          <a
            href="https://youtu.be/durLC2647Xs"
            target="_blank"
            rel="noopener noreferrer"
          >{`Niagara Falls (#2)`}</a>
        </div>
      </Section>
      <Section dark>
        <Title>What About My Children?</Title>
        <Button as={Link} to="/about/ministries/kids">
          Kids Page
        </Button>
      </Section>
      <SocialLinks accounts={socialMedia} />
    </>
  );
};

export default styled(Teens)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
