import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mailbody from './components/Mailbody';
import Mailopen  from './components/Mailopen';
import Sendmail from './components/Sendmail';
import { useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice'


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen) 

  return (
    <div className='app'>
      <Header />
      <div className='app-bdy'>
        <Sidebar />
        <BrowserRouter>
          <Switch>
              <Route path='/mail' component={Mailopen} />
              <Route path='/' component={Mailbody} />
          </Switch>
        </BrowserRouter>
      </div>
      {sendMessageIsOpen && <Sendmail />}
    </div>
  );
}

export default App;
