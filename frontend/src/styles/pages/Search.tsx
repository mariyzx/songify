import styled from 'styled-components';

export const MainSearch = styled.div`
  height: 90vh;
  display: flex;
  width: 100%;

  @media only screen and (max-width: 630px) {
    flex-direction: column;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    gap: 1rem;
  }

  input {
    width: 400px;
  }

  @media only screen and (max-width: 520px) {
    input {
      width: 200px;
    }
  }
`;
