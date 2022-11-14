import { useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import '../ContactForm/ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [number, setNumber] = useState(INITIAL_STATE.number);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const onSubmit = event => {
    event.preventDefault();
    onSubmit && handleSubmit({ name: name, number: number });
    reset();
  };

  const reset = () => {
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
  };


    return (
      <form onSubmit={onSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          id={nameInputId}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={numberInputId}></label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={event => setNumber(event.target.value)}
          id={numberInputId}
          placeholder="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
    };
  


ContactForm.propTypes = {
  handleSubmit:PropTypes.func.isRequired,
};