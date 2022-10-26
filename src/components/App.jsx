import { nanoid } from 'nanoid';
import { Phonebook } from '../components/Phonebook/Phonebook';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Section } from '../components/Section/Section';

import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact, deleteContact } from 'redux/contacts/contactsSlice';
import { updateFilter } from 'redux/filter/filterSlice';

import { Box } from '../components/Box';
// ==============================

export const App = () => { 

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onAddContact = newUser => {
    const uniqUserSearch = contacts.find(({ name }) => name === newUser.name);
    uniqUserSearch
      ? alert(`${uniqUserSearch.name} is already in contacts`)
      : dispatch(addContact({ ...newUser, id: nanoid() }));
  };

  const onDeleteContact = e => {
    const deleteById = e.target.closest('li[data-id]').dataset.id;
    dispatch(deleteContact(deleteById));
  };

  const onChangeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <Box
      bg="background"
      my={6}
      mx="auto"
      py={5}
      px={6}
      maxWidth="420px"
      borderRadius="normal"
      border="normal"
    >
      <Section title="Phonebook">
        <Phonebook onAddContact={onAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter onChangeFilter={onChangeFilter} />
        <ContactList
          onDeleteContact={onDeleteContact}
        />
      </Section>
    </Box>
  );
};
