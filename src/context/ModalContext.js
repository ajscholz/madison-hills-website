// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react

import React, { createContext, useState } from 'react';

const ModalContext = createContext([() => {}, {}]);

const ModalContextProvider = props => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={[modalOpen, setModalOpen]}>
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
