// https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react

import React, { createContext, useState } from 'react';

const messagesState = {
  type: 'messages',
  filters: { communicators: [], topics: [], year: [] },
};

// const seriesState = {
//   type: 'series',
//   filters: { topics: [], year: [] },
// };

const MessageViewContext = createContext([{}, () => {}]);

const MessageViewProvider = props => {
  const [view, setView] = useState({ ...messagesState });

  return (
    <MessageViewContext.Provider value={[view, setView]}>
      {props.children}
    </MessageViewContext.Provider>
  );
};

export { MessageViewContext, MessageViewProvider };
