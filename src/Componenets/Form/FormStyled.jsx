import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: 1.3em;

  label {
    padding: 15px;
    display: flex;
    font-size: 20px;
    font-weight: 600;
    flex-direction: column;
    align-items: flex-start;
  }

  .input {
    flex: 1;
    margin: 5px auto;
    padding: 1em 2em;
    border: 0;
    width: 100%;
    box-sizing: border-box;
    color: #000000;
    font-size: 0.8rem;
    font-family: Open Sans, Arial, sans-serif;
    text-shadow: 1px 1px 1px #232323;
    border-radius: 25px;
    background: #8dbc20;
    background: linear-gradient(to bottom, #f3d00a 0%, #f1faf3 100%);
  }

  .input:focus {
    box-shadow: 0 0 10px 0 #50eb13 inset, 0 0 10px 4px #50eb13;

    outline: none;
    transition: transform 0.15s ease;
    transform: scale(1.02);
  }

  .buttonSubmit,
  .buttonClose {
    text-decoration: none;
    display: inline-block;
    width: 175px;
    height: 45px;
    line-height: 45px;
    border-radius: 45px;
    margin: 10px 20px;
    font-family: "Montserrat", sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 600;
    color: #524f4e;
    background: white;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }
  .buttonSubmit:hover {
    background: #07e712;
    box-shadow: 0 15px 20px rgba(89, 229, 46, 0.4);
    color: white;
    transform: translateY(-7px);
  }
  .buttonClose:hover {
    background: #e70707;
    box-shadow: 0 15px 20px rgba(229, 46, 46, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
