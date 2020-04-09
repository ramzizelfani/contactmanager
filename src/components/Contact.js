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
  state = {
    showContactInfo: false,
  };
  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = (e) => {
    this.props.deleteClickHandler();
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className='card card-body mb-3'>
        <h4>
          {name}{' '}
          <i
            onClick={this.onShowClick}
            className='fas fa-sort-down'
            style={{ cursor: 'pointer' }}
          ></i>
          <i
            onClick={this.onDeleteClick}
            className='fas fa-trash-alt'
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          ></i>
        </h4>
        {showContactInfo ? (
          <ul className='list-group'>
            <li className='list-group-item'>Email: {email}</li>
            <li className='list-group-item'>Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

/*Contact.defaultProps = {
  name: 'new user',
  email: 'nuser@test.test',
  phone: '+216 22 222 222',
};*/

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
};

export default Contact;
