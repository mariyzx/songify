import { darken } from 'polished';
import styled from 'styled-components';

const Loader = styled.div`
  width: 12em;
  height: 1em;
  border-radius: 8px;
  background-color: ${(props) => darken(0.3, props.theme.colors.secondary)};

  div {
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.secondary};
    animation: width7435 1.5s linear infinite;
    transition: all;
  }

  @keyframes width7435 {
    from {
      /*width: 0;*/
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }
`;

export default Loader;
