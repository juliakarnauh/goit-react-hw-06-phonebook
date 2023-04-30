import { useDispatch } from "react-redux"
import PropTypes from 'prop-types';
import { addContact } from "Redux/Contact/contactsSlice";
import { Title, Form, Input, Label, Button } from './ContactForm.styled';


export const ContactForm = () => {
    const dispatch = useDispatch()
 const   handleSubmit =(e)=>{
e.preventDefault()
dispatch(addContact({name: e.target.elements.name.value, id: Date.now(), number: e.target.elements.number.value, }))
    }
return (
    <>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit} >
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button>Add contact</Button>
      </Form>
    </>
  );
};
ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
  };