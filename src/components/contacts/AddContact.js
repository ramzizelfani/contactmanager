import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (!/([\w.\-_]+)?\w+@[\w-_]+(.\w+){1,}/i.test(email)) {
      this.setState({ errors: { email: 'An Email is required' } });
      return;
    }
    if (
      !/(\(?\+?\d{1,3}\)?[\s-]+)?\(?\d{1,3}\)?[\s-]+\d{0,3}[\s-]?\d{0,3}[\s-]?\d{0,3} /.test(
        phone
      )
    ) {
      this.setState({ errors: { phone: 'A phone number is required!' } });
      return;
    }
    const newContact = {
      name,
      email,
      phone,
    };
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );
    dispatch({
      type: 'ADD_CONTACT',
      payload: response.data,
    });
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });

    this.props.history.push('/');
  };
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card mb-3'>
              <div className='card-header'>Add Contact</div>
              <div className='card-body'>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label='Name'
                    name='name'
                    placeholder='Enter Name...'
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label='Email'
                    type='email'
                    name='email'
                    placeholder='Enter email...'
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label='Phone'
                    name='phone'
                    placeholder='Enter a phone number...'
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type='submit'
                    value='Add Contact'
                    className='btn btn-light btn-block'
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
