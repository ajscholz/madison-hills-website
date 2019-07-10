// code at https://hackernoon.com/simplifying-responsive-layouts-with-react-hooks-19db73893a7a

import React, { createContext, useContext, useState, useEffect } from "react"

const BrowserWidthContext = createContext(null)

const BrowserWidthProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <BrowserWidthContext.Provider value={width}>
      {children}
    </BrowserWidthContext.Provider>
  )
}

export default BrowserWidthProvider
export const useBrowserWidth = () => useContext(BrowserWidthContext)
