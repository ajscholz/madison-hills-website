import React from "react"
import styled from "styled-components"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

export default ({ beliefs }) => {
  return (
    <StyledAccordion allowZeroExpanded={true}>
      {beliefs.map((belief, index) => {
        return (
          <StyledAccordionItem key={index}>
            <AccordionItemHeading>
              <Title>{belief.title}</Title>
            </AccordionItemHeading>
            <StyledAccordionItemPanel>
              <Text>{belief.text}</Text>
              <Reference>
                {belief.references.map(reference => (
                  <StyledLink
                    href={reference.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    index={reference.ref}
                  >
                    {reference.ref}
                  </StyledLink>
                ))}
              </Reference>
            </StyledAccordionItemPanel>
          </StyledAccordionItem>
        )
      })}
    </StyledAccordion>
  )
}

const StyledAccordion = styled(Accordion)`
  width: 100%;
  max-width: 500px;
`

const StyledAccordionItem = styled(AccordionItem)`
  width: 100%;
  height: auto;
  margin: 0.5rem 0 0.5rem 0;
  border: 1px solid var(--primaryDark);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  background: none;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  transition: all 0.3s;
`

const Title = styled(AccordionItemButton)`
  padding: 1rem 2rem;
  background: var(--primaryDark);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 5;
  outline: none;
  &::before {
    content: "";
    position: relative;
    left: -0.25rem;
    height: 0.5rem;
    width: 0.5rem;
    border: 1px solid var(--white);
    border-top: none;
    border-left: none;
    transform: rotate(-45deg);
    margin-right: 0.6rem;
    transition: var(--mainTransition);
  }
  &[aria-expanded="true"]::before,
  &[aria-selected="true"]::before {
    transform: rotate(45deg);
  }
`

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 1rem 2rem;
`

const Text = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 1rem;
`
const Reference = styled(AccordionItemPanel)`
  padding: 0;
  font-size: 0.8rem;
  text-transform: capitalize;
  opacity: 0.8;
`

const StyledLink = styled.a`
  :not(:last-of-type):after {
    content: ", ";
  }
`
