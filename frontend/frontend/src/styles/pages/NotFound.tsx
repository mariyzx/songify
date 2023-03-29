import styled from 'styled-components';

const MainNotFound = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;

  button {
    background-color: transparent;
    color: ${(props) => props.theme.colors.text};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: large;
  }

  button:hover {
    cursor: pointer;
  }
`;

export default MainNotFound;
