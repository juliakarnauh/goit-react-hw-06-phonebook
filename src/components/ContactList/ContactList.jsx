import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
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
