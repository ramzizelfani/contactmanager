import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <Fragment>
              <h1 className='display-4 mb-2'>
                <i
                  className='fas fa-address-book mr-3'
                  style={{ color: 'red' }}
                ></i>
                <span className='text-danger'>Contacts</span>
              </h1>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
