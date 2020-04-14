import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const { name, email, phone } = response.data;
    this.setState({ name, email, phone });
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const { id } = this.props.match.params;
    //Check for validation errors
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
    // Update contact here
    const updatedContact = {
      name,
      email,
      phone,
    };

    console.log(id);
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedContact
    );
    dispatch({
      type: 'UPDATE_CONTACT',
      payload: response.data,
    });

    // Clear the state and input fields
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
              <div className='card-header'>Edit Contact</div>
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
                    value='Update Contact'
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

export default EditContact;
