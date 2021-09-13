import FIlter from "../Filter/FIlter";
import { UserMenuWrapper } from "./UserMenuStyled";

const UserMenu = ({
  onHandleLogOut,
  authName,
  authEmail,
  onHandleCreateContact,
}) => {
  return (
    <UserMenuWrapper>
      <h2>Welcom {authName}</h2>
      <div className="head-wrapper">
        <FIlter />
        <div className="wrapper-email-button">
          <h3>Your email: {authEmail}</h3>
          <button
            type="button"
            className="button-logout"
            onClick={onHandleLogOut}
          >
            LogOut
          </button>
          <button
            type="button"
            className="button-addcontact"
            onClick={onHandleCreateContact}
          >
            Add Contact
          </button>
        </div>
      </div>
    </UserMenuWrapper>
  );
};

export default UserMenu;
