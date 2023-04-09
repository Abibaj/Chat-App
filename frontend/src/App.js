import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import ChatPage from './components/ChatPage/ChatPage';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <Sidebar />
      <ChatPage></ChatPage>
      {/* <div className={classes['message-space']}>
        <div className={classes['top-tab']}>Top tab</div>
        <div className={classes['content']}>Chat space</div>
        <div className={classes['bottom-tab']}>bottom bar</div>
      </div> */}
    </div>
  );
}

export default App;
