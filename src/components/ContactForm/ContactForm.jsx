import React, { Component } from 'react';
import css from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter both name and number.');
      return;
    }
    this.props.onSubmit({ ...this.state });

    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div className={css.contactForm}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              className={css.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Number:
            <input
              className={css.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button className={css.nameBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export { ContactForm };
