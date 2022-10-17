import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <li>
          {name}: {number}
        </li>
        <button type="button" onClick={() => onDeleteContact(id)}>
          delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;

// export const ContactList = ({ contacts, onDeleteContact }) => (
//   <Container>
//     {contacts.map(({ id, name, number }) => (
//       <ContactItem
//         key={id}
//         name={name}
//         number={number}
//         onDeleteContact={onDeleteContact}
//         id={id}
//       />
//     ))}
//   </Container>
// );
