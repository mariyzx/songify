import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const CardAlbum = styled(Link)`
  width: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: max-content;
  margin: 6px;
  border: 0px solid transparent;
  border-radius: 5px;

  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    transition: all ease-in 0.1s;
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

  img {
    width: 100px;
  }
`;
