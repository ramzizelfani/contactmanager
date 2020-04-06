import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './Contact.css';

class Contact extends Component {
  // you can either define default props and propTypes within the class based component using the key word static or outside the class as shown bellow
  //   static defaultProps = {
  //     name: 'new user',
  //     email: 'nuser@test.test',
  //     phone: '+216 22 222 222',
  //   };

  //   static propTypes = {
  //     name: PropTypes.string.isRequired,
  //     email: PropTypes.string.isRequired,
  //     phone: PropTypes.string.isRequired,
  //   };
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className='card card-body mb-3'>
        <h4>{name}</h4>
        <ul className='list-group'>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.defaultProps = {
  name: 'new user',
  email: 'nuser@test.test',
  phone: '+216 22 222 222',
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
