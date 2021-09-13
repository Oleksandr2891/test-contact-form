import styled from "styled-components";

export const AuthFormWrapper = styled.div`
  text-rendering: optimizeLegibility;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
  flex-direction: column;
  position: relative;
  font-size: 1.3em;

  .login-form {
    width: 100%;
    padding: 2em;
    position: relative;
    border-radius: 3px;
    border: 1px solid #163fb1;
    box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  }
  .login-form:before {
    content: "";
    position: absolute;
    top: -80px;
    left: 0;
    height: 2px;
    width: 100%;
  }
  .flex-row {
    margin-bottom: 1em;
  }

  .logo {
    margin-bottom: 50px;
    color: #fff;
    width: 100%;
  }

  .logo h1 {
    text-align: center;
    font-size: 45px;
    font-weight: 900;
    text-shadow: -1px -2px #0011a9, 0 1px 0 #6d83ff;
  }

  .lf--input {
    flex: 1;
    margin: 5px auto;
    padding: 1em 2em;
    border: 0;
    width: 100%;
    box-sizing: border-box;
    color: #ffffff;
    font-size: 0.8rem;
    font-family: Open Sans, Arial, sans-serif;
    text-shadow: 1px 1px 1px #232323;
    border-radius: 25px;
    background: #8dbc20;
    background: linear-gradient(to bottom, #f3d00a 0%, #f1faf3 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2320bc', endColorstr='#46fa5e', GradientType=0 );
  }
  .lf--input:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(1.02);
  }

  .lf--submit {
    display: block;
    padding: 10px 40px;
    margin: 0 auto;
    /* width: 100%; */

    box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
    background: #00ff00;
    background: linear-gradient(to bottom, #00ff00 0%, #17fa2a 100%);
    /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ff00', endColorstr='#17fa2a', GradientType=0 ); */
    border: 0;
    border-radius: 30px;
    color: #fff;
    margin-top: 50px;
    cursor: pointer;
    font-size: 0.85em;
    font-weight: 500;
    text-shadow: -1px -1px #01a701, 0 1px 0 #8fec6b;
  }
  .lf--submit:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(1.02);
  }

  .lf--forgot {
    margin-top: 2em;
    color: #ffffff;
    font-size: 0.5em;
    text-align: center;
    float: left;
  }

  /* ::-webkit-input-placeholder {
    color: #ffffff;
  }

  ::-moz-placeholder {
    color: #ffffff;
  }

  :-ms-input-placeholder {
    color: #ffffff;
  } */

  ::placeholder {
    color: #ffffff;
  }
`;
