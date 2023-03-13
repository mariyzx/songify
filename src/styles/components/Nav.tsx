import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 17%;
  margin-top: 0.7rem;
  height: 100vh;
  padding-left: 15px;

  a:hover {
    svg {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  svg {
    font-size: 20px;
  }

  @media only screen and (max-width: 630px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: max-content;
  }
`;

export default Nav;
