import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;

  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-space-around;
    margin: 2rem;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:first-child {
      margin-right: 2rem;
    }
    &:nth-child(2) {
      margin-right: 2rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
