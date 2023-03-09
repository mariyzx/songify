import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 17%;
  margin-top: 0.5rem;
  height: 100vh;
  padding-left: 15px;

  @media only screen and (max-width: 630px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`;

export default Nav;
