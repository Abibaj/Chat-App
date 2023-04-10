import React, { Fragment, useState } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import ChatPage from './components/ChatPage/ChatPage';
import LoginOverlay from './components/LoginOverlay/LoginOverlay';
import InitialPage from './components/UI/InitialPage/InitialPage';

import classes from './App.module.scss';

function App() {
  const [initialPageIsShown, setInitialPageIsShown] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsShown, setmodalIsShown] = useState(true);

  setTimeout(() => {
    setInitialPageIsShown(false);
  }, 1 * 1000);

  const hideModalHandler = () => {
    setmodalIsShown(!isLoggedIn);
  };
  const showModalHandler = () => {
    setmodalIsShown(isLoggedIn);
  };

  return (
    <div className={classes.App}>
      {initialPageIsShown && <InitialPage />}
      {!initialPageIsShown && modalIsShown && (
        <LoginOverlay onHideModal={hideModalHandler} />
      )}
      {!initialPageIsShown && !modalIsShown && (
        <Fragment>
          <Sidebar />
          <ChatPage />
        </Fragment>
      )}
    </div>
  );
}

export default App;
