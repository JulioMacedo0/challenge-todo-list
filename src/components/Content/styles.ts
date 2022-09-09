import styled from "styled-components";

export const Container = styled.div`
  width: 46rem; //736px
  height: 28.1875rem; // 451px
  margin: 0 auto;
  margin-top: 91px;

  margin-bottom: 3rem;
  @media (max-width: 745px) {
    width: 30rem;
  }

  @media (max-width: 450px) {
    width: 20rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  .rightCounter {
    display: flex;
    justify-content: space-around;
    font-weight: 700;
    font-size: 0.75rem; //12px
    background-color: var(--gray-400);
    color: var(--gray-200);
    padding: 2px 8px;
    border-radius: 8px;
  }

  div {
    display: flex;
    align-items: center;
    width: 8.625rem; //138px
    height: 1.1875rem; //19px
  }
`;

export const LeftP = styled.p`
  color: var(--blue-500);
  font-weight: 700;
  margin-right: 8px;
  font-size: 0.8575rem; //14px
  line-height: 1.08575rem; //19.94px
`;

export const RightP = styled.p`
  color: var(--purple-500);
  font-weight: 700;
  margin-right: 8px;
  font-size: 0.8575rem; //14px
  line-height: 1.08575rem; //19.94px
`;

export const Leftcounter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem; //12px
  background-color: var(--gray-400);
  color: var(--gray-200);
  width: 1.5rem; //24px
  height: 1.1875rem; //19px
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.75rem; //12px
  line-height: 0.9075rem; // 14.52px
`;

export const Content = styled.main`
  border-top: solid 1px var(--gray-400);
  border-radius: 8px;
  height: 100%;
  margin-top: 1.5rem; //24px
`;
