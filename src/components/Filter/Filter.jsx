import { Title, FilterDiv, Label, Input } from './Filter.styled';
import { filterContact } from 'Redux/Contact/contactsSlice';
import { useDispatch } from "react-redux"

export const Filter = () => {
    const dispatch = useDispatch()

    const handleFilter = (e) => {
        dispatch(filterContact(e.target.value));
      };
    
      return (
        <>
          <Title>Contacts</Title>
          <FilterDiv>
            <Label>Find contacts by name</Label>
            <Input  onChange={handleFilter} type="text" />
          </FilterDiv>
        </>
      );
    };