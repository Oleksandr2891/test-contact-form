import styled from "styled-components";

export const UserMenuWrapper = styled.div`
  .wrapper-email-button {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .button-logout,
  .button-addcontact {
    border-radius: 5px;
    min-width: 60px;
    transition: 0.15s ease-in-out;
  }
  .button-logout:hover {
    box-shadow: 0 0 10px 0 #eb1313 inset, 0 0 10px 4px #eb1313;
  }
  .button-addcontact:hover {
    box-shadow: 0 0 10px 0 #1317eb inset, 0 0 10px 4px #1317eb;
  }
`;
