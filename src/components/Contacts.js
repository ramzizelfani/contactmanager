import React, { Component, Fragment } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Abdallah Bak',
        email: 'abak@test.test',
        phone: '+216 22 222 222',
      },
      {
        id: 2,
        name: 'Med Amine',
        email: 'mamine@test.test',
        phone: '+216 22 222 223',
      },
      {
        id: 3,
        name: 'Houssem Tass',
        email: 'htass@test.test',
        phone: '+216 22 222 224',
      },
    ],
  };
  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </Fragment>
    );
  }
}

export default Contacts;
