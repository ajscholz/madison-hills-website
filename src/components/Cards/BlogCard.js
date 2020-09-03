import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const BlogCard = ({ className, blog }) => {
  return (
    <Link className={className} to={`/blog/${blog.slug}`}>
      <CardImage>
        <Img fluid={blog.image.fluid} />
      </CardImage>
      <CardBody>
        <h3>{blog.title}</h3>
        <h6>{`${blog.date}  |  ${blog.author}`}</h6>
      </CardBody>
    </Link>
  );
};

export default styled(BlogCard)`
  width: 100%;
  /* max-width: 400px; */
  /* border: 1px solid black; */
  box-shadow: var(--shadow3);
  display: flex;
  flex-direction: column;
  transition: var(--mainTransition);
  border-radius: 4px;
  overflow: hidden;
  :hover {
    transform: scale(1.02);
    box-shadow: var(--shadow3);
  }
`;

const CardImage = styled.div`
  height: 0;
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
  /* display: flex;
  align-items: center; */

  & .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute !important;
    left: 0;
  }
`;

const CardBody = styled.div`
  padding: 1em 1.75em;

  & h6 {
    text-transform: uppercase;
    margin-top: 0.75em;
    margin-bottom: 1.25em;
    color: var(--secondary);
  }
`;

export const query = graphql`
  fragment BlogCardFragment on ContentfulBlogPost {
    id: contentful_id
    title
    author
    date(formatString: "MMM DD YYYY")
    slug
    image {
      fluid(maxWidth: 500, quality: 80) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`;
