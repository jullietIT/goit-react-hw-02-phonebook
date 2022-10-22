import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import initialContacts from './ContactList/initialContacts.json';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Wrapper, Title, Title2, Title3 } from './App.styled';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      ...contact,
    };
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  //!!<>
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  //!!<>
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Wrapper>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.addContact} />

          <Title2>Contacts</Title2>
          <Title3>Find contact by name</Title3>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Wrapper>
      </>
    );
  }
}

export default App;
