import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { authTokenSelector } from "../redux/auth/auth-selectors";
import { notifyInfo } from "../services/toastify";

let isNotFoundName = false;

export const visibleContacts = (item, filter) => {
  const normalizedFilter = filter?.toLowerCase();
  const contacts = item?.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(isNotFoundName);
  if (filter && !contacts.length && !isNotFoundName) {
    notifyInfo("Noting found for your request");
    isNotFoundName = true;
  }
  if (contacts.length) isNotFoundName = false;
  if (filter) {
    return contacts;
  } else {
    return item;
  }
};

export const PrivateRoute = function ({ children, routeProps }) {
  const isLoggedIn = useSelector(authTokenSelector);
  return (
    <Route {...routeProps}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
};

export const PublicRoute = function ({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authTokenSelector);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {!shouldRedirect ? children : <Redirect to="/contacts" />}
    </Route>
  );
};
