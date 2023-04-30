import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import PropTypes from 'prop-types';
import { deleteContact} from "Redux/Contact/contactsSlice"
import { selectFilterContacts } from 'Redux/Contact/selectors';
import { ContactUl, ContactLi, ContactButton } from './ContactList.styled';
export const ContactList = () => {
    const dispatch = useDispatch()
 const contacts = useSelector(selectFilterContacts)
    return (
      <ContactUl>
        {contacts.map(contact => (
          <ContactLi key={contact.id}>
            {contact.name} {contact.number}
            <ContactButton type="button" onClick={()=>{dispatch(deleteContact(contact.id))}}>
              Delete
            </ContactButton>
          </ContactLi>
        ))}
      </ContactUl>
    );
  };
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  };