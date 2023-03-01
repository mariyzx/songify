import styled from 'styled-components';

const HomeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`;

export default HomeForm;
