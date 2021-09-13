import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, -0);
  width: 100vw;
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;

  /* .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 96vw;
    max-width: 450px;
    height: 96vh;
    max-height: 609px;
    overflow: auto;
    background: #ffffff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    @media screen and(min-width: 1200px) {
      max-width: 450px;
      min-height: 609px;
    }
    @media screen and(min-width: 1200px) {
      max-width: 528px;
      min-height: 581px;
    } */
  }
`;
