import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  text-align: center;
  appearance: none;
  background: ${props => props.theme.buttonBgColor};
  color: ${props => props.theme.buttonColor};
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  > svg {
    display: block;
  }
`;

export default Button;
