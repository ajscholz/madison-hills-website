import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { FiX } from "react-icons/fi"

const CloseButton = props => {
  const { className, handleClose } = props

  return (
    <button
      className={className}
      onClick={handleClose}
      aria-label="Close Modal"
      aria-labelledby="close-modal"
    >
      <FiX />
    </button>
  )
}

CloseButton.propTypes = {
  handleClose: PropTypes.func.isRequired,
}

export default styled(CloseButton)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: bold;
  line-height: 0;
`
