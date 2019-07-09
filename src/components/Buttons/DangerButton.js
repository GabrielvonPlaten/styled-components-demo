import styled from 'styled-components';
import colors from '../utils/colors';
import Button from '../utils/Button';

const { red_0, red_1, white } = colors;

const DangerButton = styled(Button)`
  background: ${red_1};
  border: 2px solid ${red_1}
  color: ${white};
  &:hover {
    color: ${white};
    background: ${red_0};
    border: 2px solid ${red_0};
  }
`;

export default DangerButton;