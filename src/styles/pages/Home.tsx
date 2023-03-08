import styled from 'styled-components';

const MainHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  gap: 4rem;
  transition: ease all 0.5s;

  img {
    width: 30%;
  }

  hr {
    height: 250px;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
  }

  // MOBILE FIRST: 320px - 480px;
  // https://www.emailonacid.com/blog/article/email-development/emailology_media_queries_demystified_min-width_and_max-width/
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    height: 100vh;
    gap: 4rem;

    img {
      width: 200px;
    }

    hr {
      display: none;
    }
  }

  @media only screen and (min-width: 520px) and (max-width: 600px) {
    img {
      width: 200px;
    }

    gap: 3rem;
  }
`;

export default MainHome;
