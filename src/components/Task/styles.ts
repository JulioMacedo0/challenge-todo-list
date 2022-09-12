import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  align-items: center;
  background-color: var(--gray-500);
  border: solid 1px var(--gray-400);
  color: var(--gray-100);
  width: 100%;
  height: 4.5rem; //72px
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin-left: 1rem;
  margin-right: 0.75rem; //12px
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 1.09rem; //17.45px
  height: 1.09rem; //17.45px
  border-radius: 50%;
  border: 1px solid var(red);

  cursor: pointer;

  :checked {
    background-color: var(--publer-dark);
    padding: 2px;
  }

  :hover {
    background: red;
  }
`;

export const TodoTitle = styled.p``;

export const Trash = styled.div`
  width: 1.5rem; //24px
  height: 1.5rem; //24px
  border-radius: 4px;
  color: var(--gray-300);
`;
