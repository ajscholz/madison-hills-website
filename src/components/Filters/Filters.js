import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaTimes, FaCheck, FaBan, FaChevronRight } from 'react-icons/fa';

// import Backdrop from '../Backdrop';

const Filters = props => {
  const { open, click, children, reset } = props;

  const toggle = useSpring({
    transform: open ? 'translateY(0)' : 'translateY(100%)',
  });

  return (
    <>
      <Wrapper className={props.className} style={toggle}>
        <Header>
          <Close onClick={() => click(false)}>
            <FaTimes />
          </Close>
          {/* <Backdrop open={open}></Backdrop> */}
          <h3>Filter</h3>
        </Header>
        <Body>
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <FilterBox key={index}>{child}</FilterBox>
            ))
          ) : (
            <FilterBox>{children}</FilterBox>
          )}
        </Body>
        <Footer>
          <ApplyButton onClick={() => click(false)}>
            <FaCheck />
            Apply Filters
          </ApplyButton>
          <ResetButton onClick={() => reset()}>
            <FaBan />
            Clear Filters
          </ResetButton>
          <ClearButton onClick={() => reset()}>
            <FaBan />
            Clear
          </ClearButton>
        </Footer>
      </Wrapper>
    </>
  );
};

export default styled(Filters)`
  height: 100%;
`;

const Wrapper = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  max-height: 100%;
  width: 100%;
  background: var(--white);
  z-index: 200;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  @media (min-width: 992px) {
    height: 100%;
    background: red;
    position: static;
    max-width: 200px;
    min-width: 200px;
    padding: 0 2rem 0 0;
    background: none;
    /* border-right: 2px solid var(--secondary); */
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    & h3 {
      margin-bottom: 1.5rem;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  height: 6rem;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  & > h3 {
    margin: 0;
    text-align: center;
    grid-column: 1 / -1;
    /* font-weight: bold; */
    /* text-decoration: underline; */
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: start;
  align-content: start;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  grid-template-rows: 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 0.5rem;
  padding: 0 2.5vw;
  flex-shrink: 1;
  /* overflow: hidden; */
`;

const Close = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  outline: none;
  border: 0;
  background: 0;
  padding: 0;
  & > svg {
    display: block;
    padding: 0;
    font-size: 1.5rem;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const FilterBox = styled.div`
  /* overflow: hidden; */
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  width: 100%;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25px;
    background: linear-gradient(rgba(242, 238, 238, 0), rgba(242, 238, 238, 1));
  }
`;

const Footer = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 1rem 5% 1rem 5%;
  box-shadow: var(--shadow1);
  flex-shrink: 0;
  @media (min-width: 992px) {
    width: auto;
    bottom: unset;
    left: unset;
    right: 0;
    top: 6px;
  }
`;

const ButtonBase = styled.button`
  width: 100%;
  outline: none;
  border: none;
  /* border-radius:  */
  padding: 0.8rem;
  font-size: 0.8rem;
  color: var(--white);
  border-radius: calc(43.59px * 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    display: block;
    margin-right: 0.35rem;
  }
  @media (min-width: 992px) {
    padding: 0;
    background: transparent;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
`;

const ApplyButton = styled(ButtonBase)`
  background: var(--primary);
  margin-bottom: 0.5rem;
  @media (min-width: 992px) {
    display: none;
  }
`;

const ResetButton = styled(ButtonBase)`
  background: var(--danger);
  @media (min-width: 992px) {
    display: none;
  }
`;

const ClearButton = styled(ButtonBase)`
  display: none;
  color: var(--danger);
  @media (min-width: 992px) {
    display: flex;
  }
`;
