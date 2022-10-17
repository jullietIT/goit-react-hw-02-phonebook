import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class PhoneBook extends Component {
  rende() {
    return (
      <div>
        <h2>Phonebook</h2>
        <div>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          ;
        </div>
        <h3>Contacts</h3>
        <p> Find contacts by name</p>
      </div>
    );
  }
}
