import React from 'react';
import styled from 'styled-components';

import { ChevronDown } from 'react-feather';

const Wrapper = styled.label`
  position: relative;

  > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
`;

const Input = styled.select`
  padding: 12px 42px 12px 12px;
  font-size: 16px;
  appearance: none;
  color: ${props => props.theme.bodyTextColor};
  background: ${props => props.theme.postBgColor};
  border: solid 1px ${props => props.theme.postBorderColor};
  border-radius: 5px;
`;

const Select = ({ className, ...props }) => (
  <Wrapper className={className}>
    <Input {...props} />
    <ChevronDown />
  </Wrapper>
);

export default Select;
