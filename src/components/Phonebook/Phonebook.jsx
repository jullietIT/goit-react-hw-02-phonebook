import React, { Component } from 'react';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    const { login, password } = event.currentTarget;
    console.log(login.value, password.value);
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Login
          <input
            type="tel"
            name="number"
            value={this.state.name}
            onChange={this.handleSubmit}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Phonebook;
