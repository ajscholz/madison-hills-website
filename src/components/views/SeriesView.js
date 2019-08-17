import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Title from '../Title';
import SeriesCard from '../SeriesCard';
import CardGridContainer from '../CardGridContainer';

const query = graphql`
  {
    allSeries: allContentfulMessageSeries(
      sort: { fields: seriesStartDate, order: DESC }
    ) {
      edges {
        series: node {
          id
          title: seriesTitle
          start: seriesStartDate(formatString: "MMM")
          end: seriesEndDate(formatString: "MMM")
          year: seriesEndDate(formatString: "YYYY")
          length: seriesLength
          image: seriesGraphic {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default () => {
  const { allSeries } = useStaticQuery(query);

  return (
    <SeriesView>
      <Title>Recent Series</Title>
      <CardGridContainer>
        {allSeries.edges.map(({ series }) => {
          return <SeriesCard series={series} key={series.id} />;
        })}
      </CardGridContainer>
    </SeriesView>
  );
};

const SeriesView = styled.div`
  width: 100%;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
