import React, { Component } from 'react';
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
