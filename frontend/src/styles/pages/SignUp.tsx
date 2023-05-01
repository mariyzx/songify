import styled from 'styled-components';

const MainSignUp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  height: 80vh;

  form {
    width: 250px;
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }

  button {
    width: 100px;
    align-self: center;
  }
`;

export default MainSignUp;
