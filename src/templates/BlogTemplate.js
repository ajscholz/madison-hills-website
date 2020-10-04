import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Section from '../components/Sections/Section';
import Title from '../components/Title';
import HeroImage from '../components/Layout/HeroImage';
import SEO from '../components/Seo';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import Metadata from '../components/Metadata/Metadata';

const BlogTemplate = ({ data: { blog } }) => {
  const image = {
    image: blog.image,
    focalPoint: {
      focalPoint: {
        x: blog.image.file.details.image.width / 2,
        y: blog.image.file.details.image.height / 2,
      },
    },
  };
  return (
    <>
      <SEO title={blog.title} image={blog.image.file.url} />
      <HeroImage image={image} title={blog.title} />

      <StyledSection>
        <Wrapper>
          <Title position="left">{blog.title}</Title>
          <Metadata>{`${blog.date}\u00A0\u00A0|\u00A0\u00A0${blog.author}`}</Metadata>
          <div className="blog-body">
            <MDXRenderer>{blog.blog.mdx.body}</MDXRenderer>
          </div>
        </Wrapper>
      </StyledSection>
    </>
  );
};

export default BlogTemplate;

export const query = graphql`
  query($id: String!) {
    blog: contentfulBlogPost(contentful_id: { eq: $id }) {
      title
      author
      date(formatString: "MMM DD YYYY")
      slug
      ...BlogPostHeroImageFragment
      blog {
        mdx: childMdx {
          body
        }
      }
    }
  }
`;

const StyledSection = styled(Section)`
  padding-left: 2em;
  padding-right: 2em;

  @media (min-width: 662px) {
    padding-left: 6em;
    padding-right: 6em;
  }
`;

const Wrapper = styled.div`
  max-width: 992px;
  margin: 0 auto;

  & .blog-body {
    margin-top: 2.5em;
  }

  & ${Title} {
    margin-bottom: 1.75rem;
  }

  & ${Metadata} {
    font-size: 0.86rem;
  }
`;
