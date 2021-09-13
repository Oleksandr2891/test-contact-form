import { useDispatch, useSelector } from "react-redux";
import {
  authUserNameSelector,
  authUserEmailSelector,
} from "../redux/auth/auth-selectors";
import { authTokenSelector } from "../redux/auth/auth-selectors";
import { LogOutOperation } from "../redux/auth/auth-operations";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getContactsList } from "../redux/selector";
import {
  addContact,
  updateContact,
} from "../redux/contacts/contacts-operation";
import ContactList from "../Componenets/ContactList/ContactList";
import Form from "../Componenets/Form/Form";
import UserMenu from "../Componenets/UserMenu/UserMenu";
import Modal from "../Componenets/modal/Modal";
import { ContactPageWrapper } from "../Componenets/contactPage/ContactPageStyled";

const initialState = {
  name: "",
  number: "",
};

const ContactsPage = () => {
  const dispatch = useDispatch();
  const authName = useSelector(authUserNameSelector);
  const authEmail = useSelector(authUserEmailSelector);
  const authToken = useSelector(authTokenSelector);
  const contacts = useSelector(getContactsList);
  const history = useHistory();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [contact, setContact] = useState(initialState);
  const [nameButton, setNameButton] = useState(initialState);
  const [idContact, setIdContact] = useState(null);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const onUpdateContact = (id) => {
    const updateContactData = contacts.filter((contact) => contact.id === id);
    setContact({
      name: updateContactData[0].name,
      number: updateContactData[0].number,
    });
    setIsOpenForm(true);
    setNameButton("Update contact");
    setIdContact(id);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isContact = contacts.some((item) => item.name === contact.name);

    if (!isContact) {
      nameButton === "Add contact"
        ? await dispatch(addContact(contact, authToken))
        : await dispatch(updateContact(contact, authToken, idContact));
      setContact({
        name: "",
        number: "",
      });
      setIsOpenForm(false);
    } else {
      //   notifyError(`${name} is already in contacts`);
    }
  };

  const onHandleLogOut = async (e) => {
    e.preventDefault();
    try {
      await dispatch(LogOutOperation(authToken));
      history.push("/");
    } catch (error) {}
  };

  const onHandleCreateContact = () => {
    setIsOpenForm(true);
    setNameButton("Add contact");
  };

  const onHandleClose = () => {
    console.log(`close`);
    setContact({
      name: "",
      number: "",
    });
    setIsOpenForm(false);
  };

  return (
    <ContactPageWrapper>
      <UserMenu
        onHandleLogOut={onHandleLogOut}
        authName={authName}
        authEmail={authEmail}
        onHandleCreateContact={onHandleCreateContact}
      />

      {isOpenForm && (
        <Modal closeModal={onHandleClose}>
          <Form
            name={contact.name}
            number={contact.number}
            handleChangeInput={handleChangeInput}
            handleSubmit={handleSubmit}
            nameButton={nameButton}
            onHandleClose={onHandleClose}
          />
        </Modal>
      )}
      <ContactList onUpdateContact={onUpdateContact} />
    </ContactPageWrapper>
  );
};

export default ContactsPage;
