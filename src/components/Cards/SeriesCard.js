import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import CardBase from './CardBase';

import { FaAngleDoubleRight } from 'react-icons/fa';

import Date from '../../components/Metadata/Date';

const SeriesCard = ({ className, series }) => {
  const { title, start, end, year, image } = series;
  // const seriesSlug =
  //   series &&
  //   `/messages/series/${series.title
  //     .replace(/ /g, '-')
  //     .replace(/[?!,/^*%$@#()'"`|]/g, '')
  //     .toLowerCase()}`;
  // const messageSlug = `/messages/${title
  //   .replace(/ /g, '-')
  //   .replace(/[?!,/^*%$@#()'"`|]/g, '')
  //   .toLowerCase()}`;

  const date = start === end ? `${start} ${year}` : `${start}-${end} ${year}`;

  return (
    <CardBase as={Link} className={className} to={`/messages`}>
      <div className="card-header">
        <Img
          fluid={image.fluid}
          alt="series graphic"
          style={{ width: '100%' }}
        />
      </div>
      <div className="card-body">
        <div className="metadata">
          <Date>{date}</Date>
        </div>
        <h3>{title}</h3>

        <div className="footer">
          View message series{' '}
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

export default SeriesCard;

SeriesCard.propTypes = {
  series: PropTypes.object.isRequired,
};

export const query = graphql`
  fragment SeriesCardFragment on ContentfulMessageSeries {
    id: contentful_id
    title: seriesTitle
    start: seriesStartDate(formatString: "MMM")
    end: seriesEndDate(formatString: "MMM")
    year: seriesStartDate(formatString: "YYYY")
    image: seriesGraphic {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    length: seriesLength
  }
`;
