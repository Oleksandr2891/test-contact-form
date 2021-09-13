import { NavLink } from "react-router-dom";
import { HomePageWrapper } from "../Componenets/homePage/HomePageStyled";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <h1>Your phonebook</h1>
      <NavLink
        exact
        to="/auth"
        className="navLink-item"
        activeClassName="navLink-item__active"
      >
        Authentication
      </NavLink>
      <NavLink
        to="/register"
        className="navLink-item"
        activeClassName="navLink-item__active"
      >
        Registration
      </NavLink>
    </HomePageWrapper>
  );
};

export default HomePage;
