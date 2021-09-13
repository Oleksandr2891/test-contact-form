import {
  addContactApi,
  deleteContactApi,
  getAllContactsApi,
  updateContactApi,
} from "../../services/Api";
import { notifySuccess } from "../../services/toastify";
import {
  addAsyncContactError,
  addAsyncContactRequests,
  addAsyncContactSuccess,
  deleteAsyncContactError,
  deleteAsyncContactRequests,
  deleteAsyncContactSuccess,
  getAsyncContactsError,
  getAsyncContactsRequests,
  getAsyncContactsSuccess,
} from "./contacts-actions";

export const getContacts = (authToken) => async (dispatch) => {
  dispatch(getAsyncContactsRequests());
  try {
    const contacts = await getAllContactsApi(authToken);
    dispatch(getAsyncContactsSuccess(contacts));
  } catch (error) {
    dispatch(getAsyncContactsError(error));
  }
};

export const addContact = (contactData, authToken) => async (dispatch) => {
  dispatch(addAsyncContactRequests());
  try {
    const contact = await addContactApi(contactData, authToken);
    dispatch(addAsyncContactSuccess(contact));
    notifySuccess("You have successfully added a new contact!");
  } catch (error) {
    dispatch(addAsyncContactError(error));
  }
};

export const deleteContact = (contactId, authToken) => async (dispatch) => {
  dispatch(deleteAsyncContactRequests());
  try {
    await deleteContactApi(contactId, authToken);
    dispatch(deleteAsyncContactSuccess(contactId));
    notifySuccess("You have successfully deleted a contact!");
  } catch (error) {
    dispatch(deleteAsyncContactError(error));
  }
};

export const updateContact =
  (contactData, authToken, contactId) => async (dispatch) => {
    console.log(`DataOperation`, contactData, authToken, contactId);
    dispatch(addAsyncContactRequests());
    try {
      const contact = await updateContactApi(contactData, contactId, authToken);
      dispatch(deleteAsyncContactSuccess(contactId));
      dispatch(addAsyncContactSuccess(contact));
      // notifySuccess("You have successfully added a new contact!");
    } catch (error) {
      dispatch(addAsyncContactError(error));
    }
  };
