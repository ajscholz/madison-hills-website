import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Title from '../Title';
import SeriesCard from '../SeriesCard';

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
      <GridContainer>
        {allSeries.edges.map(({ series }) => {
          return <SeriesCard series={series} key={series.id} />;
        })}
      </GridContainer>
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275.83px, 1fr));
  grid-gap: 2rem;
  width: 100%;
  max-width: 1110px;
  margin-bottom: 3rem;
`;
