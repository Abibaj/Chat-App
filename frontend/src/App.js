import React, { useState } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import ChatPage from './components/ChatPage/ChatPage';
import LoginOverlay from './components/LoginOverlay/LoginOverlay';

import classes from './App.module.scss';

function App() {
  const [modalIsShown, setmodalIsShown] = useState(true);

  const hideModalHandler = () => {
    setmodalIsShown(false);
  };
  const showModalHandler = () => {
    setmodalIsShown(true);
  };

  return (
    <div className={classes.App}>
      <Sidebar />
      <ChatPage />
      {modalIsShown && <LoginOverlay onHideModal={hideModalHandler} />}
    </div>
  );
}

export default App;
