import React, { useContext, useState } from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/HeroImage';
import Section from '../components/Section';
import { ToggleButton } from '../components/Button';
import FilterContainer from '../components/Filters/FilterContainer';
import MessagesContainer from '../components/Filters/MessagesContainer';
// import MessagesView from '../components/views/MessagesView';
// import SeriesView from '../components/views/SeriesView';
import Chips from '../components/Filters/Chips';
import CardsContainer from '../components/Filters/CardsContainer';
import MessageCard from '../components/MessageCard';

import { MessageViewContext } from '../context/MessageViewContext';

const MessagesPage = props => {
  const { page, allContentfulMessage, messageTags } = props.data;
  let { messages } = allContentfulMessage;
  const { communicators, topics } = messageTags;
  const { image } = page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  messages = messages.map(message => message.message);

  const [view, setView] = useContext(MessageViewContext);
  const [activeComm, setActiveComm] = useState([]);
  const [activeTopic, setActiveTopic] = useState([]);

  let activeMessages;

  const filterComms = (filter, messages, type) => {
    return messages.filter(message => {
      return filter.includes(message[type]);
    });
  };

  const filterTopics = (filter, messages, type) => {
    return messages.filter(message => {
      const trueFalse = message[type].map(topic => {
        return filter.includes(topic) ? true : false;
      });
      return trueFalse.includes(true);
    });
  };

  // there ARE communicators, but not topics
  if (activeComm.length !== 0 && activeTopic.length === 0) {
    activeMessages = filterComms(activeComm, messages, 'communicator');

    // there ARE topics but not communicators
  } else if (activeComm.length === 0 && activeTopic.length !== 0) {
    activeMessages = filterTopics(activeTopic, messages, 'topics');

    // there are communicators AND topics
  } else if (activeComm.length !== 0 && activeTopic.length !== 0) {
    activeMessages = filterComms(
      activeComm,
      filterTopics(activeTopic, messages, 'topics'),
      'communicator'
    );

    // there are no active filters
  } else if (activeComm.length === 0 && activeTopic.length === 0) {
    activeMessages = [...messages];
  }

  return (
    <>
      <Seo title="Messages" image={img} />

      <StyledHeroImage image={image.fluid} title="Messages">
        <div
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'relative',
            top: '20px',
          }}
        >
          <ToggleButton
            onClick={() => setView('messages')}
            disabled={view === 'messages'}
          >
            Messages
          </ToggleButton>
          <ToggleButton
            onClick={() => setView('series')}
            disabled={view === 'series'}
          >
            Series
          </ToggleButton>
        </div>
      </StyledHeroImage>

      <Section style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <FilterContainer>
          <Chips
            title={'Communicators'}
            items={communicators}
            state={activeComm}
            setState={setActiveComm}
          />
          <Chips
            title={'Topics'}
            items={topics}
            state={activeTopic}
            setState={setActiveTopic}
          />
        </FilterContainer>
        <MessagesContainer>
          <h2>{view}</h2>
          <CardsContainer>
            {activeMessages.map(message => {
              return <MessageCard message={message} key={message.id} />;
            })}
          </CardsContainer>
        </MessagesContainer>
      </Section>
    </>
  );
};

export default MessagesPage;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Messages" }) {
      image: bannerImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        file {
          url
          details {
            image {
              height
              width
            }
          }
        }
      }
    }
    allContentfulMessage(sort: { fields: messageDate, order: DESC }) {
      messages: edges {
        message: node {
          id: contentful_id
          title: messageTitle
          date: messageDate(formatString: "MMM DD, YYYY")
          communicator
          topics: tags
          image: messagePhoto {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          series: messageSeries {
            title: seriesTitle
          }
        }
      }
    }
    messageTags: allContentfulMessage {
      topics: distinct(field: tags)
      communicators: distinct(field: communicator)
    }
  }
`;
