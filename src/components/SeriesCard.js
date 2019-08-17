import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { FaAngleDoubleRight } from 'react-icons/fa';

const MessageCard = ({ className, series }) => {
  const { title, start, end, year, image, length } = series;
  const seriesSlug = `/messages/series/${title
    .replace(/ /g, '-')
    .replace(/[?!,/^*%$@#()'"`|]/g, '')
    .toLowerCase()}`;

  return (
    <Link className={className} to={`${seriesSlug}`}>
      <Header>
        <Img
          fluid={image.fluid}
          alt={`${title} series graphic`}
          style={{ width: '100%' }}
        />
        {/* <PlayIcon>View Series</PlayIcon> */}
      </Header>
      <Body>
        <Metadata>
          <h6>{`${length} parts`}</h6>
          <h6>{`${
            start === end ? `${start}` : `${start}, ${end}`
          } ${year}`}</h6>
        </Metadata>
        <h3>{title}</h3>
        <div style={{ fontSize: '0.8rem', marginBottom: '0', opacity: '0.6' }}>
          View series{' '}
          <FaAngleDoubleRight
            style={{
              display: 'inline-block',
              position: 'relative',
              top: '2px',
              opacity: '.8',
            }}
          />
        </div>
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
  font-size: 1.25rem;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
