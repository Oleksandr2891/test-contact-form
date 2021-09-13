import styled from "styled-components";

export const ContactItem = styled.li`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  box-shadow: 0 8px 15px rgba(221, 201, 22, 0.445);

  .contactItem {
    flex-grow: 5;
    display: flex;
  }

  .buttonWrapper {
    flex-grow: 1;
  }
  .buttonDelete,
  .buttonUpdate {
    text-decoration: none;
    display: inline-block;
    width: 100px;
    height: 20px;
    line-height: 16px;
    border-radius: 45px;
    margin: 5px;
    font-size: 10px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 600;
    color: #524f4e;
    background: white;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    flex-grow: 1;
  }
  .buttonDelete:hover {
    background: #e53a2e;
    box-shadow: 0 15px 20px rgba(229, 52, 46, 0.4);
    color: white;
    transform: translateY(-7px);
  }
  .buttonUpdate:hover {
    background: #2e50e5;
    box-shadow: 0 15px 20px rgba(46, 89, 229, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
