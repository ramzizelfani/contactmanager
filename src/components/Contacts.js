import React, { Component } from 'react';
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

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
