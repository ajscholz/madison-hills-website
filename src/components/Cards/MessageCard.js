import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import CardBase from './CardBase';

import { getImageFocus } from '../../utils/helpers';

import { FaAngleDoubleRight } from 'react-icons/fa';

import Date from '../../components/Metadata/Date';

const MessageCard = ({ className, message }) => {
  const { title, communicator, date, image, focalPoint } = message;
  // const seriesSlug =
  //   series &&
  //   `/messages/series/${series.title
  //     .replace(/ /g, '-')
  //     .replace(/[?!,/^*%$@#()'"`|]/g, '')
  //     .toLowerCase()}`;
  const messageSlug = `/messages/${title
    .replace(/ /g, '-')
    .replace(/[?!,/^*%$@#()'"`|]/g, '')
    .toLowerCase()}`;

  const focus = getImageFocus(image.file.details.image, focalPoint.focalPoint);

  return (
    <CardBase as={Link} className={className} to={messageSlug}>
      <div className="card-header">
        <Img
          fluid={image.fluid}
          alt="preaching photo"
          imgStyle={{ objectPosition: focus }}
        />
      </div>
      <div className="card-body">
        <div className="metadata">
          <h6>{communicator}</h6>
          <Date>{date}</Date>
        </div>
        <h3>{title}</h3>

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
      </div>
    </CardBase>
  );
};

export default MessageCard;

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

export const query = graphql`
  fragment MessageCardFragment on ContentfulMessage {
    id: contentful_id
    title: messageTitle
    date: messageDate(formatString: "MMM DD, YYYY")
    year: year
    communicator
    topics: tags
    image {
      fluid {
        ...GatsbyContentfulFluid_withWebp
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
    series: messageSeries {
      title: seriesTitle
    }
    focalPoint: imageFocalPoint {
      focalPoint {
        x
        y
      }
    }
  }
`;
