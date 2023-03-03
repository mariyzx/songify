import { shade } from 'polished';
import styled from 'styled-components';

const HomeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 1px;
  }

  label > input {
    background-color: transparent;
    color: ${(props) => props.theme.colors.text};
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    font-size: 0.9rem;
    padding-inline: 0.2em;
    padding-block: 0.4em;
    transition: all 0.5s ease-out;
  }

  label > input:hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 4px 4px 2px 2px;
  }

  label > input:focus {
    outline: none;
  }

  button {
    width: 30%;
    height: 35px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: #e1e1e1;
    border-radius: 10px;
    font-weight: 700;
    box-shadow: 0 5px 5px ${(props) => shade(0.1, props.theme.colors.primary)};
  }
`;

export default HomeForm;
