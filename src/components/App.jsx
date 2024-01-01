import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const addContact = newContact => {
    const isNameAlreadyExist = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isNameAlreadyExist) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    const contactToAdd = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    };

    setContacts(prevContacts => [...prevContacts, contactToAdd]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    const contactsFromLocalStorage =
      JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(contactsFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = getFilteredContacts();

  return (
    <div
      style={{
        height: '100vh',
        width: 800,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export { App };
