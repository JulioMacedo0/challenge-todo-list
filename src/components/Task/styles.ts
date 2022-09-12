import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  align-items: flex-start;
  background-color: var(--gray-500);
  border: solid 1px var(--gray-400);
  color: var(--gray-100);
  width: 100%;
  height: 4.5rem; //72px
  margin-bottom: 1rem;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  margin-left: 1rem;
  margin-right: 0.75rem; //12px
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 1.2rem; //17.45px
  height: 1.1rem; //17.45px
  border-radius: 50%;

  border: 2px solid var(--blue-500);
  appearance: none;
  -webkit-appearance: none;

  cursor: pointer;

  :checked {
    background-color: var(--publer-dark);
    border: 2px solid var(--publer-dark);
  }

  :checked:hover {
    background-color: var(--purple-500);
    border: 2px solid var(--purple-500);
  }

  :hover {
    background: var(--blue-dark);
  }
`;

export const TodoTitle = styled.p`
  margin-top: 1rem;
  width: 100%;
  color: var(--gray-100);
  font-weight: 400;
  font-size: 0.875rem; //14px
  line-height: 1.225rem; //19.6px
`;

export const Trash = styled.div`
  margin-top: 1rem;
  width: 1.5rem; //24px
  height: 1.5rem; //24px
  border-radius: 4px;
  color: var(--gray-300);
  margin-left: 0.75rem; //12px
  margin-right: 1rem; //16px

  :hover {
    color: var(--danger);
  }
`;
