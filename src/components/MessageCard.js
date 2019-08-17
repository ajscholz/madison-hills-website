import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { FaRegPlayCircle, FaAngleDoubleRight } from 'react-icons/fa';

const MessageCard = ({ className, message }) => {
  const { title, communicator, date, image, series } = message;
  const seriesSlug =
    series &&
    `/messages/series/${series.title.replace(/ /g, '-').toLowerCase()}`;
  const messageSlug = `/messages/${title.replace(/ /g, '-').toLowerCase()}`;

  return (
    <Link className={className} to={messageSlug}>
      <Header>
        <Img
          fluid={image.fluid}
          alt="preaching photo"
          style={{ width: '100%' }}
        />
        <PlayIcon>
          <FaRegPlayCircle />
        </PlayIcon>
      </Header>
      <Body>
        <Metadata>
          <h6>{communicator}</h6>
          <h6>{date}</h6>
        </Metadata>
        <h3>{title}</h3>
        {series ? (
          <Link to={`${seriesSlug}`}>
            View more from this series{' '}
            <FaAngleDoubleRight
              style={{
                display: 'inline-block',
                position: 'relative',
                top: '2px',
                opacity: '.8',
              }}
            />
          </Link>
        ) : (
          <div className="footer">
            View message{' '}
            <FaAngleDoubleRight
              style={{
                display: 'inline-block',
                position: 'relative',
                top: '2px',
                opacity: '.8',
              }}
            />
          </div>
        )}
      </Body>
    </Link>
  );
};

const PlayIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--white);
  transition: var(--mainTransition);
  @media (min-width: 768px) {
    opacity: 0;
  }
`;

export default styled(MessageCard)`
  height: 275.84px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-left: 6px solid var(--primary);
  cursor: pointer;
  &:hover ${PlayIcon} {
    opacity: 1;
  }
`;

const Header = styled.div`
  height: 150px;
  width: 100%;
  background: var(--black);
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* transition: var(--mainTransition); */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* transition: var(--mainTransition); */
  }
`;

const Body = styled.div`
  width: 100%;
  padding: 1rem;
  background: var(--white);
  color: var(--black);
  overflow: hidden;

  white-space: nowrap;
  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .footer {
    font-size: 0.8rem;
    margin-bottom: 0;
    opacity: 0.6;
  }
`;

const Metadata = styled.div`
  display: flex;
  justify-content: space-between;
  h6 {
    margin: 0;
    text-transform: uppercase;
    color: gray;
    opacity: 0.6;
    font-weight: bold;
    letter-spacing: 0.5px;
    :first-of-type {
      margin-right: 1rem;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

MessageCard.propTypes = {
  message: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }).isRequired,
    communicator: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
