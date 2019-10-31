import React from "react"
import styled from "styled-components"

const Overlay = props => {
  const { className, onClick } = props
  return <div className={className} onClick={onClick} />
}

export default styled(Overlay)`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
`
