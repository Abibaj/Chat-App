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
  }, 1.5 * 1000);

  const hideModalHandler = () => {
    setmodalIsShown(!isLoggedIn);
  };

  // const showModalHandler = () => {
  //   setmodalIsShown(isLoggedIn);
  // };

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

/**
 * This is a React code that renders a chat application with a login feature. Below is a detailed documentation of the code:

Importing Required Libraries
The first thing that the code does is import some libraries that are needed for the application to run. These libraries are:

React - this is the core library for building the user interface in a React application.
Fragment - this is a utility that allows grouping of elements without adding extra nodes to the DOM.
useState - this is a hook that provides a stateful value and a function to update it.
The code also imports four components that are used in the application. These components are Sidebar, ChatPage, LoginOverlay, and InitialPage.

Defining the App Function
The App function is defined as the main component of the application. The function returns a JSX expression that represents the user interface of the application.

Setting State with useState Hook
The App function uses the useState hook to set the initial state of three variables:

initialPageIsShown - a boolean variable that controls the visibility of the initial page. It is initially set to true.
isLoggedIn - a boolean variable that controls whether a user is logged in or not. It is initially set to true.
modalIsShown - a boolean variable that controls the visibility of the login modal. It is initially set to true.
The App function also sets a timer that changes the value of initialPageIsShown to false after 1.5 seconds.

Handling Modal Visibility
The App function defines a function called hideModalHandler that toggles the value of modalIsShown. This function is used to show or hide the login modal.

The function also defines a commented out function called showModalHandler. This function is not used in the current implementation of the application.

Rendering the User Interface
The App function returns a div element with a class of "App". Inside this div, there are conditional statements that render different components based on the state of the application.

If initialPageIsShown is true, the InitialPage component is rendered.
If initialPageIsShown is false and modalIsShown is true, the LoginOverlay component is rendered. The hideModalHandler function is passed to the LoginOverlay component as a prop.
If initialPageIsShown is false and modalIsShown is false, both the Sidebar and ChatPage components are rendered.
Exporting the App Function

The App function is exported as the default export of the module, which allows other modules to import and use it.
 */
