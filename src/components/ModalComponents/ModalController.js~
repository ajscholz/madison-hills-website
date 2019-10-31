import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Modal from "./Modal"
import Button from "../Button"

const ModalController = props => {
  const { buttonText, children, buttonStyle, parentClick } = props
  const [open, setOpen] = useState(false)

  const buttonRef = useRef()

  useEffect(() => {
    if (buttonStyle === "none") {
      // setTimeout(() => {
      setOpen(true)
      // }, 5000)
    }
  }, [])

  const handleClick = () => {
    setOpen(true)
    if (typeof parentClick === "function") parentClick(false)
  }

  return (
    <>
      {/* Controller button */}
      {buttonStyle !== "none" && (
        <Button
          onClick={() => handleClick()}
          className="modal-controller-button"
          solid={buttonStyle === "solid"}
        >
          {buttonText}
        </Button>
      )}

      {/* Modal logic */}
      {open && (
        <Modal setOpen={setOpen} open={open} sourceRef={buttonRef}>
          {/* <Modal setOpen={setOpen} open={open} sourceRef={buttonRef.current}> */}
          {children}
        </Modal>
      )}
    </>
  )
}

ModalController.propTypes = {
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  buttonStyle: PropTypes.oneOf(["solid", "regular"]),
}

ModalController.defaultProps = {
  buttonText: "Modal Button",
  children: "Modal content",
  // buttonStyle: "regular",
}

export default styled(ModalController)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
