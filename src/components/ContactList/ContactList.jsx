import PropTypes from 'prop-types';
import { VscTrash } from 'react-icons/vsc';
import { Contact, Ul, Button } from './ContactList.styled';
// ===========================
export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return contacts.length === 0 ? (
    <p>Your phonebook is empty</p>
  ) : (
    <Ul>
      {!filter
        ? contacts.map(({ name, number, id }) => (
            <Contact key={id} data-id={id}>
              {name}: {number}
              <Button
                type="button"
                name="deleteBtn"
                onClick={e => onDeleteContact(e)}
              >
                Delete
                <VscTrash />
              </Button>
            </Contact>
          ))
        : filterContacts.map(({ name, number, id }) => (
            <Contact key={id} data-id={id}>
              {name}: {number}
              <Button
                type="button"
                name="deleteBtn"
                onClick={e => onDeleteContact(e)}
              >
                Delete
                <VscTrash />
              </Button>
            </Contact>
          ))}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
