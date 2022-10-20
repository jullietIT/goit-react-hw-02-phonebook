import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { WrapperForm, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  loginNameId = nanoid();
  loginNumberId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });

    // this.reset();
  };

  // handleChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  //   handleSubmit = event => {
  //     event.preventDefault();
  //   };

  //   console.log(this.state);
  // };

  //очистка формы
  reset = () => {
    this.state({
      // contacts: [],
      name: '',
      number: '',
    });
  };
  ///👌

  // Можно использовать любой пакет для генерации уникальных строк

  render() {
    return (
      <WrapperForm>
        <form onSubmit={this.handleSubmit}>
          <Label htmlFor={this.loginName}>
            Name
            <Input
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.loginNameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // value={this.state.name}
              // onChange={this.handleChange}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Label htmlFor={this.loginNumber}>
            Number
            <Input
              type="tel"
              name="number"
              id={this.loginNumberId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={this.state.number}
              onChange={this.handleChange}
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </form>
      </WrapperForm>
    );
  }
}

export default ContactForm;
