import React from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
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
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
