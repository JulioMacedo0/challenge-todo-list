import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 24px;

  p:first-of-type {
    margin-top: 1rem;
    font-weight: 700;
  }
  p {
    color: var(--gray-300);
    font-size: 1rem; //16px
  }
`;
