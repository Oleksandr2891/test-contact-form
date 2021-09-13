import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 600px;
  min-height: 600px;
  padding: 20px;
  background: rgb(44, 223, 26);
  background: radial-gradient(
    circle,
    rgba(44, 223, 26, 1) 0%,
    rgba(12, 7, 56, 1) 100%
  );
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  .contactsWrapper {
    display: flex;
    align-content: stretch;
  }

  .title {
    text-align: center;
    align-items: flex-start;
  }
`;
