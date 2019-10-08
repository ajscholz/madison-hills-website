import React from 'react'
import styled, {css} from 'styled-components'
import { FiX, FiCheck } from 'react-icons/fi'

const Chip = props => {
  const { text, handleClick, active, filter, func, className } = props

  return (
    <button
      className={ className }
      onClick={ () => handleClick(text, filter, func) }
    >
      <div className='chip-content-wrapper'>
        { active ? <FiX /> : <FiCheck /> }
        <p>{ text }</p>
      </div>
    </button>
  )
}

export default styled(Chip)`
  background-color: transparent;
  height: max-content;
  max-width: calc(100% - 1rem);
  border: 1px solid var(--primary);
  color: var(--primary);
  font-size: 0.5rem;
  margin: 0.4rem;
  font-weight: 400;
  padding: 0.2rem 0.8rem;
  text-transform: capitalize;
  letter-spacing: 0.1em;
  border-radius: 12.5px;
  transition: var(--mainTransition);
  outline: none;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 1rem;
  p {
    white-space: nowrap;
    margin: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    transition: var(--mainTransition);
    font-size: 1em;
  }
  ${props =>
    props.selected &&
    css`
      background: var(--primary);
      color: var(--white);
      svg {
        transform: rotate(45deg);
      }
    `}
`;

export default Chip
