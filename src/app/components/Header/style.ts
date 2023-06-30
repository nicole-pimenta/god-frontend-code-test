import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 95%;
  height: 69px;
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: var(--bg-color-2);
  height: 69px;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px 4px 0px 0px;

  h2 {
    color: var(--color-grey-3);
  }

  span {
    color: var(--color-grey-2);
    font-size: var(--title-3);
  }

  @media (max-width: 600px) {
    height: 600px;
    flex-direction: column;
    justify-content: space-around;
  }
`;
