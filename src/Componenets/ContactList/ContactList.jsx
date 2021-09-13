import { useDispatch, useSelector } from "react-redux";
import { ContactWrapper } from "./ContactListStyled";
import ContactListItem from "./ContactListItem/ContactListItem";
import { useEffect } from "react";
import {
  getContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operation";
import { getVisibleContacts } from "../../redux/selector";
import { authTokenSelector } from "../../redux/auth/auth-selectors";

const ContactList = ({ onUpdateContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const authToken = useSelector(authTokenSelector);

  const onDeleteContact = (id) => dispatch(deleteContact(id, authToken));
  const getById = (id) => onUpdateContact(id);

  useEffect(() => {
    if (authToken) dispatch(getContacts(authToken));
  }, [dispatch, authToken]);

  return (
    <ContactWrapper>
      {contacts?.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
          onUpdateContact={getById}
        />
      ))}
    </ContactWrapper>
  );
};

export default ContactList;
