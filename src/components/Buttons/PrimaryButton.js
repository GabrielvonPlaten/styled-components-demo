import styled from 'styled-components';
import colors from '../utils/colors';
import Button from '../utils/Button';

const { green_0, green_1, white } = colors;

const PrimaryButton = styled(Button)`
  background: ${green_1};
  border: 2px solid ${green_1}
  color: ${white};
  &:hover {
    color: ${white};
    background: ${green_0};
    border: 2px solid ${green_0};
  }
`;

export default PrimaryButton;