import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Seo from '../components/Seo';
import StyledHeroImage from '../components/Layout/HeroImage';
import Section from '../components/Sections/Section';
import { FiFilter } from 'react-icons/fi';
// import { ToggleButton } from '../components/Button';
// import FilterContainer from '../components/Filters/FilterContainer';
// import MessagesContainer from '../components/Filters/MessagesContainer';
// import MessagesView from '../components/views/MessagesView';
// import SeriesView from '../components/views/SeriesView';
// import Chips from '../components/Filters/Chips';
// import CardsContainer from '../components/Filters/CardsContainer';
// import MessageCard from '../components/MessageCard';

// import { MessageViewContext } from '../context/MessageViewContext';
import FilterController from '../components/Filters/FilterController';
// import List from '../components/Filters/List';

const MessagesPage = props => {
  const { page, allContentfulMessage, messageTags } = props.data;
  const { messages } = allContentfulMessage;
  const { image } = page;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  const [showFilters, setShowFilters] = useState(false);

  // messages = messages.map(message => message.message);

  // const [view, setView] = useContext(MessageViewContext);
  // const [activeComm, setActiveComm] = useState([]);
  // const [activeTopic, setActiveTopic] = useState([]);

  // let activeMessages;

  // const filterComms = (filter, messages, type) => {
  //   return messages.filter(message => {
  //     return filter.includes(message[type]);
  //   });
  // };

  // const filterTopics = (filter, messages, type) => {
  //   return messages.filter(message => {
  //     const trueFalse = message[type].map(topic => {
  //       return filter.includes(topic) ? true : false;
  //     });
  //     return trueFalse.includes(true);
  //   });
  // };

  // // there ARE communicators, but not topics
  // if (activeComm.length !== 0 && activeTopic.length === 0) {
  //   activeMessages = filterComms(activeComm, messages, 'communicator');

  //   // there ARE topics but not communicators
  // } else if (activeComm.length === 0 && activeTopic.length !== 0) {
  //   activeMessages = filterTopics(activeTopic, messages, 'topics');

  //   // there are communicators AND topics
  // } else if (activeComm.length !== 0 && activeTopic.length !== 0) {
  //   activeMessages = filterComms(
  //     activeComm,
  //     filterTopics(activeTopic, messages, 'topics'),
  //     'communicator'
  //   );

  //   // there are no active filters
  // } else if (activeComm.length === 0 && activeTopic.length === 0) {
  //   activeMessages = [...messages];
  // }
  // console.log(messageTags);
  return (
    <>
      <Seo title="Messages" image={img} />

      <StyledHeroImage image={image.fluid} title="Messages">
        {/* <div
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
        </div> */}
      </StyledHeroImage>

      <Section
        style={{
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <FilterButton onClick={() => setShowFilters(!showFilters)}>
          <FiFilter size={36} />
        </FilterButton>
        <FilterController
          state={[showFilters, setShowFilters]}
          filterData={messageTags}
          listData={messages}
        />
        {/* <FilterContainer>
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
        </MessagesContainer> */}
      </Section>
    </>
  );
};

export default MessagesPage;

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Messages" }) {
      image: bannerImage {
        fluid(quality: 90) {
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
      messages: nodes {
        ...MessageCardFragment
      }
    }
    messageTags: allContentfulMessage {
      topics: distinct(field: tags)
      communicator: distinct(field: communicator)
      year: distinct(field: year)
    }
  }
`;

const FilterButton = styled.button`
  padding: 1em;
  align-self: flex-end;
  background: red;
  display: flex;
  position: fixed;
  z-index: 99;
  bottom: 20px;
  right: 20px;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 50%;
  background: var(--primary);
  color: var(--white);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  &:focus {
    background: var(--primaryDark);
  }
`;
