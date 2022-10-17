// import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import Phonebook from '../Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';
import initialContacts from './ContactList/initialContacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        {/* <Phonebook /> */}
        <ContactList Contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;

// export class App extends Component {
//   // state = {
//   //   contacts: [
//   //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   //   ],
//   //   filter: '',
//   // };
