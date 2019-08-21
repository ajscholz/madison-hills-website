import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FaTimes, FaCheck, FaUndo } from 'react-icons/fa';

// import Backdrop from '../Backdrop';

export default props => {
  const { open, click, children, reset } = props;

  const toggle = useSpring({
    transform: open ? 'translateY(0)' : 'translateY(100%)',
  });

  return (
    <Filters style={toggle}>
      <Close onClick={() => click(false)}>
        <FaTimes />
      </Close>
      {/* <Backdrop open={open}></Backdrop> */}
      <h3>Filters</h3>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <FilterBox key={index}>{child}</FilterBox>
        ))
      ) : (
        <FilterBox>{children}</FilterBox>
      )}
      <ButtonWrapper>
        <ApplyButton onClick={() => click(false)}>
          <FaCheck />
          Apply Filters
        </ApplyButton>
        <ResetButton onClick={() => reset()}>
          <FaUndo />
          Reset Filters
        </ResetButton>
      </ButtonWrapper>
    </Filters>
  );
};

const Filters = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: lightgray;
  z-index: 200;
  display: grid;
  align-items: start;
  align-content: start;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  grid-template-rows: min-content min-content;
  grid-row-gap: 1rem;
  grid-column-gap: 0.5rem;
  padding: 1rem;
  & > h3 {
    margin: 0;
    text-align: center;
    grid-column: 1 / -1;
    font-weight: bold;
    text-decoration: underline;
  }
  @media (min-width: 992px) {
    position: static;
    max-width: 200px;
    min-width: 200px;
    background: transparent;
    border: 2px solid var(--black);
    border-radius: 5px;
    margin-right: 2rem;
    height: 500px;
    display: flex;
    flex-direction: column;
  }
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  width: min-content;
`;

const ButtonWrapper = styled.div`
  width: 90%;
  position: absolute;
  bottom: 1rem;
  left: 5%;
  @media (min-width: 992px) {
    position: static;
    width: 100%;
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
`;
