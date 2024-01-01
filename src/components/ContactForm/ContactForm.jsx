import React, { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = formData;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter both name and number.');
      return;
    }

    onSubmit({ ...formData });
    setFormData({ name: '', number: '' });
  };

  return (
    <div className={css.contactForm}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className={css.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number:
          <input
            className={css.input}
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </label>
        <button className={css.nameBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export { ContactForm };
