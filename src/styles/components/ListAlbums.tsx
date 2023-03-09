import styled from 'styled-components';

export const MainList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 10px;
`;

export const DivAlbum = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const ListAlb = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-left: 20px;
  justify-content: center;

  @media only screen and (max-width: 630px) {
    justify-content: center;
    align-items: center;
  }
`;

export const CardAlbum = styled.div`
  width: 230px;
  padding: 10px;
  display: flex;
  height: max-content;
  margin: 6px;
  border: 0px solid transparent;
  border-radius: 5px;
  gap: 4px;

  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    transition: all ease-in 0.2s;

    span {
      display: flex;
      align-items: flex-end;
    }

    svg {
      display: flex;
      font-size: 50px;
      color: ${(props) => props.theme.colors.secondary};
      transition: all ease 0.2s;
    }

    @media only screen and (max-width: 630px) {
      flex-direction: column;

      div {
        justify-content: center;
        text-align: center;
      }
    }
  }

  h3 {
    width: 150px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  div {
    display: flex;
    gap: 6px;
  }

  svg {
    display: none;
  }

  img {
    width: 100px;
  }

  @media only screen and (max-width: 630px) {
    width: 200px;
    justify-content: center;
    align-items: center;
  }
`;
