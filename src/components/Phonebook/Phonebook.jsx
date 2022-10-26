import { useState } from 'react';
import { VscAdd } from 'react-icons/vsc';
import { Label, Input, Button } from './Phonebook.styled';
// ==============================

export const Phonebook = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const state = {
    name,
    number,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return null;
    }   
  };

  const onFormSubmitAddContact = e => {
    e.preventDefault();
    onAddContact(state);
    onFormReset();
  };

  const onFormReset = () => {
    setName("");
    setNumber("");   
  };

  return (
    <>
      <form onSubmit={onFormSubmitAddContact}>
        <Label>
          Name
          <Input
            onChange={onInputChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            onChange={onInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="123-45-67"
          />
        </Label>
        <Button type="submit">
          Add contact <VscAdd />
        </Button>
      </form>
    </>
  );
};
