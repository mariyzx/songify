import { shade, lighten } from 'polished';
import styled from 'styled-components';

export const HomeForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  text-align: left;
  font-size: 18px;

  @media only screen and (max-width: 520px) {
    text-align: left;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: #e1e1e1;
  border: 2px solid transparent;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 0 5px 5px ${(props) => shade(0.1, props.theme.colors.primary)};
  cursor: pointer;

  :hover {
    background-color: ${(props) => shade(0.2, props.theme.colors.secondary)};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => lighten(0.1, props.theme.colors.secondary)};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1px;

  input {
    background-color: transparent;
    color: ${(props) => props.theme.colors.text};
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    font-size: 0.9rem;
    padding-inline: 0.2em;
    padding-block: 0.4em;
    transition: all 0.5s ease-out;
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
    font-size: 12px;
  }

  input:hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 4px 4px 2px 2px;
  }

  input:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 6px;
  color: #e1e1e1;
  border: 2px solid transparent;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 0 5px 5px ${(props) => shade(0.1, props.theme.colors.primary)};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border: 2px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => lighten(0.1, props.theme.colors.secondary)};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${(props) => lighten(0.1, props.theme.colors.secondary)};
  }
`;
