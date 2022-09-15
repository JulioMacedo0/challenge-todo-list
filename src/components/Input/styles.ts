import styled from "styled-components";

export const Container = styled.form`
  position: absolute;
  top: 11rem;
  width: 46rem; //736px/638px
  padding: 0 auto;

  @media (max-width: 745px) {
    width: 30rem;
  }

  @media (max-width: 450px) {
    width: 20rem;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  color: var(--gray-100);
  height: 2rem;
  width: 100%;
  background-color: var(--gray-500);
  border: 0;
  padding: 1.5rem;
  border-radius: 8px;
`;

export const Button = styled.button`
  font-size: 0.875rem; //14px
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.625rem; //90px
  height: 3.25rem; //56px
  margin-left: 8px;
  pad: 16px;
  background-color: var(--blue-dark);
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  color: var(--gray-100);
  transition: background-color 0.5s;
  :hover {
    background-color: var(--blue-500);
  }
  :focus {
    outline: transparent;
    box-shadow: 0 0 0 1px var(--blue-dark);
  }

  svg {
    margin-left: 0.5rem; //8px
  }
`;
