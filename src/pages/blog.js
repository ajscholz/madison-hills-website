import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import HeroImage from '../components/Layout/HeroImage';
import SEO from '../components/Seo';
import Section from '../components/Sections/Section';
import BlogCard from '../components/Cards/BlogCard';

const BlogPage = ({ data }) => {
  const {
    page: { image },
  } = data;
  const img = {
    src: image.file.url,
    height: image.file.details.image.height,
    width: image.file.details.image.width,
  };

  return (
    <>
      <SEO title="Blog" image={img} />

      <HeroImage
        image={image.fluid}
        title="Bridge To Sunday Blogs"
        full
        backgroundPosition="60% 10%"
      />

      <StyledSection>
        {data.blogs.all.map(blog => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </StyledSection>
    </>
  );
};

export const data = graphql`
  {
    page: contentfulPages(title: { eq: "Blog" }) {
      ...HeroImageFragment
    }

    blogs: allContentfulBlogPost(sort: { fields: date, order: DESC }) {
      all: nodes {
        ...BlogCardFragment
      }
    }
  }
`;

const StyledSection = styled(Section)`
  padding: 2em;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5em;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 762px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default BlogPage;
