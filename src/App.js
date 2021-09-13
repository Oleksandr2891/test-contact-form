import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import GlobalStyles from "../src/style/GlobalStyle";
import { PrivateRoute, PublicRoute } from "./helpers/function";
import { ToastContainer } from "react-toastify";
import Section from "./Componenets/Section/Section";
import Container from "./Container/Container";
import LoaderSpiner from "./Componenets/loader/Loader";
import { useSelector } from "react-redux";
import { authIsLoadingSelector } from "./redux/auth/auth-selectors";

const AuthPage = lazy(() =>
  import("./pages/AuthPage" /* webpackChunkName: "auth-page"*/)
);
const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-pages"*/)
);
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage" /* webpackChunkName: "register-page"*/)
);
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage" /* webpackChunkName: "contacts-page"*/)
);

export default function App() {
  const isLoading = useSelector(authIsLoadingSelector);
  return (
    <>
      <GlobalStyles />
      <Container>
        <Suspense fallback={<LoaderSpiner />}>
          <Switch>
            <Section>
              <PublicRoute path="/auth" exact restricted>
                <AuthPage />
              </PublicRoute>
              <PublicRoute path="/register" exact restricted>
                <RegisterPage />
              </PublicRoute>
              <PublicRoute path="/" exact restricted>
                <HomePage />
              </PublicRoute>
              <PrivateRoute path="/contacts" exact>
                {isLoading ? <LoaderSpiner /> : <ContactsPage />}
              </PrivateRoute>
            </Section>
            <ToastContainer />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
