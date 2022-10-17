import React from 'react';
// import ContactList from 'components/ContactList/ContactList';
// import initialContacts from './ContactList/initialContacts.json';

class PhoneBook extends React.Component {
  // state = {
  //   Contacts: initialContacts,
  //   inputValue: '',
  // };
  deleteContact = ContactId => {
    this.setState(prevState => ({
      Contacts: prevState.Contacts.filter(Contact => Contact.id !== ContactId),
    }));
  };

  handleInputChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ inputValue: event.currentTarget.value });
  };
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} />
      </div>
    );
  }
}

//    return (
//     // <div>
//     //   <h2>Phonebook</h2>
//       <div>

//            <input
//           type="text" value={ this.state.inputValue}
//           // name="name"
//           // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           // required
//   />

//       </div>
//     //   <h3>Contacts</h3>
//     //   <p> Find contacts by name</p>
//     // </div>
//   );
// };
export default PhoneBook;
