import styled, { keyframes } from 'styled-components';

const scaleOut = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 0px auto;
  border-radius: 50%;
  background-color: ${props => props.theme.spinnerColor};
  animation: ${scaleOut} 0.75s infinite ease;
`;

export default Spinner;
