import css from './ContactList.module.css';
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.ContactListList}>
    {contacts.map(contact => (
      <li className={css.contactlistItem} key={contact.id}>
        {contact.name}: {contact.number}
        <button className={css.ContactListBtn} type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export { ContactList };
