// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react

import React, { createContext, useState } from 'react';

const MessageViewContext = createContext([{}, () => {}]);

const MessageViewProvider = props => {
  const [view, setView] = useState();

  return (
    <MessageViewContext.Provider value={[view, setView]}>
      {props.children}
    </MessageViewContext.Provider>
  );
};

export { MessageViewContext, MessageViewProvider };
