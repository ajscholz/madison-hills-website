import React, { useState, useContext, useEffect } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { useTransition, a, config } from "react-spring"

import Overlay from "./Overlay"
import { ModalContext } from "../../context/ModalContext"

const Modal = props => {
  const { className, children, setOpen } = props

  const [, setModalOpen] = useContext(ModalContext)

  useEffect(() => {
    setModalOpen(true)
    return () => {
      setModalOpen(false)
    }
  })

  // local state to help with animations
  const [show, setShow] = useState(true)

  // spring settings -- note "clamp: true" and "onDestroyed"
  const transitions = useTransition(show, null, {
    from: { position: "fixed", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onDestroyed: () => setOpen(false),
    config: { ...config.gentle, clamp: true },
  })

  // animate close which then unmounts the component in the onDestroyed() method of "transitions"
  const handleClose = () => {
    setShow(false)
  }

  // handle escape keypress to exit modal
  // const onKeyDown = e => {
  //   if (e.keyCode === 27) {
  //     handleClose()
  //   }
  // }

  // clone children to pass props from parent
  // https://medium.com/better-programming/passing-data-to-props-children-in-react-5399baea0356
  const clonedChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {
      handleClose: handleClose,
    })
  })

  return ReactDOM.createPortal(
    transitions.map(
      ({ item, key, props }) =>
        item && (
          <a.aside
            key={key}
            className={className}
            style={props}
            aria-modal="true"
            role="dialog"
          >
            <Overlay onClick={handleClose} />

            {clonedChildren}
          </a.aside>
        )
    ),
    document.body
  )
}

export default styled(Modal)`
  position: fixed;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`
