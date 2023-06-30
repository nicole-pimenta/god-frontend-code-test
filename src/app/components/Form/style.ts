import styled from "styled-components";

export const StyledForm = styled.form`
  border: 1px solid var(--color-secondary);
  background-color: var(--color-grey-1);
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 13px 20px 13px 20px;

    font-size: 16px;
    font-weight: 400;

    text-align: center;
    background-color: var(--color-grey-1);
  }

  button:hover {
    border: 2px solid 0;
    height: 40px;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;
