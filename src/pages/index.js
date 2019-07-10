import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import HeroImage from "../components/HeroImage"
import SEO from "../components/Seo"
import Title from "../components/Title"
import Section from "../components/Section"
import Icon from "../components/Icon"
import ContactForm from "../components/ContactForm"
import EventCard from "../components/EventCard"

import { FaClock, FaMapMarkerAlt } from "react-icons/fa"

export const data = graphql`
  query MyQuery {
    file(name: { eq: "index-banner" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        address
        city
      }
    }

    kickball: file(name: { eq: "kickball" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// const getAge = birthday => {
//   const diff = Date.now() - birthday.getTime()
//   const ageDiff = new Date(diff)

//   return Math.abs(ageDiff.getUTCFullYear() - 1970)
// }

const IndexPage = ({ data, className }) => {
  // const abelAge = getAge(new Date(2015, 4, 23))
  // const cohenAge = getAge(new Date(2017, 4, 3))

  return (
    <Layout>
      <SEO title="Home" />
      <HeroImage image={data.file.childImageSharp.fluid} full>
        For Richmond.
        <br />
        For You.
      </HeroImage>
      <Section large>
        <Title>Helping people find and follow Jesus</Title>
        <InfoWrapper>
          <InfoContainer>
            <StyledIcon icon={FaClock} className={className} />
            <H3>{`Sundays, 9:30 & 10:45a`}</H3>
          </InfoContainer>
          <InfoContainer>
            <StyledIcon icon={FaMapMarkerAlt} className={className} />
            <H3>
              {data.site.siteMetadata.address}, {data.site.siteMetadata.city}
            </H3>
          </InfoContainer>
        </InfoWrapper>
      </Section>
      <Section dark>
        <Title>Upcoming Events</Title>
        <EventList>
          <Event>
            <EventCard
              image={data.kickball.childImageSharp.fluid}
              title="family kickball"
            />
          </Event>
        </EventList>
        {/* <Title>Our Pastor</Title>
        <PastorContainer>
          <Avatar fluid={data.ben.childImageSharp.fluid} />
          <PastorInfo>
            <PastorName>{data.site.siteMetadata.pastor}</PastorName>
            <PastorDescription>
              {`Ben joined Madison Hills in 2019. He loves his wife Whitney, and his two boys Abel, ${abelAge}, and Cohen, ${cohenAge}. He is also a big fan of the Cincinnati Reds, Chipotle, and The Office.`}
            </PastorDescription>
          </PastorInfo>
        </PastorContainer> */}
      </Section>
      <Section>
        <Title>Contact Us</Title>
        <ContactForm />
      </Section>
    </Layout>
  )
}

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 576px) {
    align-items: center;
  }
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  :first-of-type {
    margin-bottom: 0.75rem;
  }
`

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  color: var(--primary);
  margin-right: 20px;
`

const H3 = styled.h3`
  font-size: 1.25rem;
  margin: 0;
`

const EventList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Event = styled.li`
  width: 100%;
  height: 100px;
`
// const PastorContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   max-width: 600px;
//   @media (min-width: 577px) {
//     flex-direction: row;
//   }
// `

// const Avatar = styled(Img)`
//   height: 200px;
//   width: 200px;
//   min-width: 200px;
//   border-radius: 50%;
//   margin: 0 0 2rem 0;
//   @media (min-width: 577px) {
//     margin: 0 2rem 0 0;
//   }
// `

// const PastorInfo = styled.div`
//   flex-shrink: 1;
//   text-align: center;
//   @media (min-width: 577px) {
//     text-align: left;
//   }
// `

// const PastorName = styled.h4`
//   color: var(--primary);
//   margin: 0;
//   font-size: 1.5rem;
//   text-transform: uppercase;
// `

// const PastorDescription = styled.p`
//   margin-bottom: 0;
// `

export default IndexPage
