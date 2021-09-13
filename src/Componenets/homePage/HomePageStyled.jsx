import styled from "styled-components";

export const HomePageWrapper = styled.div`
  margin-top: 150px;
  h1 {
    color: white;
    font-size: 48px;
    padding: 30px;
  }
  .navLink-item {
    text-decoration: none;
    display: inline-block;
    padding: 15px 30px;
    margin: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 0 40px 40px #50eb13 inset, 0 0 0 0 ##50eb13;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
    color: white;
    transition: 0.15s ease-in-out;
  }
  .navLink-item:hover {
    box-shadow: 0 0 10px 0 #50eb13 inset, 0 0 10px 4px #50eb13;
    color: #50eb13;
  }
`;
