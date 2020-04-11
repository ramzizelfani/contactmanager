import React from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';

import Header from './components/layout/Header';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', null, 'The App Component without JSX !!!')
  // );
  return (
    <Provider>
      <div className='App'>
        <Header branding='Contact Manager' />
        <div className='container'>
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
