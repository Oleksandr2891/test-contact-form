import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const signUp = async (user) => {
  try {
    const { data } = await axios.post("users/signup", user);
    return data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

const signIn = async (user) => {
  try {
    const { data } = await axios.post("users/login", user);
    return data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

const logOut = async (authToken) => {
  axios.defaults.headers.common["Authorization"] = authToken;
  try {
    return await axios.post("users/logout");
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export { signUp, signIn, logOut };

const getAllContactsApi = async (token) => {
  axios.defaults.headers.common["Authorization"] = token;
  try {
    const { data } = await axios.get(`contacts`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export { getAllContactsApi };

const deleteContactApi = async (idName, token) => {
  axios.defaults.headers.common["Authorization"] = token;
  try {
    const { data } = await axios.delete(`contacts/${idName}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export { deleteContactApi };

const addContactApi = async (contactData, token) => {
  axios.defaults.headers.common["Authorization"] = token;
  try {
    const { data } = await axios.post(`contacts`, contactData);
    return data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export { addContactApi };

const updateContactApi = async (contactData, idName, token) => {
  axios.defaults.headers.common["Authorization"] = token;
  try {
    const { data } = await axios.patch(`contacts/${idName}`, contactData);
    return data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export { updateContactApi };
