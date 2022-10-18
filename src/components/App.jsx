// import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import Phonebook from './Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';
import initialContacts from './ContactList/initialContacts.json';
// import Form from '../Phonebook/Form';
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
    // const { contacts } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        {/* <Phonebook /> */}
        {/* <Form /> */}
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
