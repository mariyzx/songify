import styled from 'styled-components';

export const MainHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  height: 95vh;
  transition: ease all 0.5s;

  hr {
    height: 320px;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 5px;
  }

  img {
    width: 280px;
  }

  // MOBILE FIRST: 320px - 480px;
  //   // https://www.emailonacid.com/blog/article/email-development/emailology_media_queries_demystified_min-width_and_max-width/
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    gap: 2rem;

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

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media only screen and (max-width: 600px) {
    gap: 1rem;

    img {
      width: 170px;
    }
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
