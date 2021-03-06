import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';

import Section from '../components/Sections/Section';
import Title from '../components/Title';
import MessageCard from '../components/Cards/MessageCard';
import CardGridContainer from '../components/Layout/CardGridContainer';
import { LinkButton } from '../components/Buttons/Button';
import SEO from '../components/Seo';

import Metadata from '../components/Metadata/Metadata';
import Date from '../components/Metadata/Date';
import MessageVideoPlayButton from '../components/MessageVideoPlayer/MessageVideoPlayButton';
import SpinnerIcon from '../components/SpinnerIcon';

import { MDXRenderer } from 'gatsby-plugin-mdx';

const MessageTemplate = ({ data }) => {
  const [touched, setTouched] = useState(false);
  const [ready, setReady] = useState(false);
  const { message, messages } = data;
  const { title, communicator, date, video, series, description } = message;

  return (
    <>
      <SEO
        title={title}
        image={series.image.fluid}
        description={`${communicator} preaches this week from the ${series.title} message series at Madison Hills Christian Church in Richmond, Kentucky.`}
      />

      {/* <Spacer /> */}

      <VideoSection>
        <VideoWrapper>
          <ReactPlayer
            url={video}
            playing={touched}
            width="100%"
            height="100%"
            controls={touched}
            onReady={() => setReady(true)}
          />
          {!ready && (
            <Loading>
              <StyledSpinnerIcon /> Loading Media
            </Loading>
          )}
          {ready && !touched && (
            <MessageVideoPlayButton setTouched={setTouched} touched={touched} />
          )}
        </VideoWrapper>

        {/* <Img fluid={image.fluid} style={{ minWidth: '100%', height: '100%' }} /> */}
        <Info>
          <Title style={{ marginBottom: '1.5rem' }}>{title}</Title>
          <MDXRenderer>{description.childMdx.body}</MDXRenderer>
          <Metadata>
            <Date icon={true}>{date}</Date>
            <h6>{communicator}</h6>
          </Metadata>
        </Info>
      </VideoSection>

      <Section>
        <Title>Messages in this series</Title>
        <CardGridContainer>
          {messages.all.map(message => (
            <MessageCard message={message} key={message.id} />
          ))}
        </CardGridContainer>
      </Section>

      <Section>
        <LinkButton to="/messages">All messages</LinkButton>
      </Section>
    </>
  );
};

// const Spacer = styled.div``

const VideoSection = styled(Section)`
  padding: 0;
  margin-top: 85.19px;

  @media (min-width: 662px) {
    margin-top: 121.14px;
  }

  @media (min-width: 1200px) {
    padding: 0 5vw;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const VideoWrapper = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 62.5vw;
  max-height: 437.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media (min-width: 1200px) {
    flex-shrink: 0;
  }
`;

const Loading = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: var(--primary);
  font-weight: bold;
`;

const StyledSpinnerIcon = styled(SpinnerIcon)`
  /* position: absolute; */
  font-size: 1em;
  margin-right: 0.5em;
`;

const Info = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  & > ${Title} {
    margin-bottom: 1.2rem;
  }
  & > p {
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0;
    :last-of-type {
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 576px) {
    padding: 3rem;
  }
  @media (min-width: 1000px) {
    flex-shrink: 1;
    /* padding: 3rem 1.5rem; */
  }
`;

export default MessageTemplate;

export const query = graphql`
  query($id: String!, $seriesId: String!) {
    message: contentfulMessage(contentful_id: { eq: $id }) {
      title: messageTitle
      communicator
      description: messageDescription {
        childMdx {
          body
        }
      }
      date: messageDate(formatString: "M/D/YYYY")
      image {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
      video: messageVideo
      series: messageSeries {
        image: seriesGraphic {
          file {
            url
          }
        }
      }
    }
    messages: allContentfulMessage(
      filter: {
        messageSeries: { contentful_id: { eq: $seriesId } }
        contentful_id: { ne: $id }
      }
    ) {
      all: nodes {
        ...MessageCardFragment
      }
    }
  }
`;
