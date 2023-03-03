import styled from 'styled-components';

const MainHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  gap: 5rem;

  img {
    width: 40%;
  }

  hr {
    height: 200px;
    border-left: 5px solid ${(props) => props.theme.colors.secondary};
    border-radius: 20%;
  }

  // MOBILE FIRST: 320px - 480px;
  // https://www.emailonacid.com/blog/article/email-development/emailology_media_queries_demystified_min-width_and_max-width/
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: 100vh;
    gap: 2rem;

    img {
      width: 200px;
    }
  }
`;

export default MainHome;
