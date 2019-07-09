import styled from 'styled-components';
import colors from './colors';

const { white, white_2, black_1 } = colors;

const Button = styled.button`
  background: ${white};
  border: 2px solid ${white_2};
  border-radius: 3px;
  box-shadow: 1px 2px 5px #d3d3d3;
  color: ${black_1};
  padding: 0.8rem 1.3rem;
  margin: 0.5rem
  transition: all 0.3s;
  &:hover {
    border: 2px solid ${white_2};
    background: ${white_2};
    color: ${black_1};
  }
`;

export default Button;