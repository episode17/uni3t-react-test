import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const Error = ({ error }) => (
  <Wrapper>
    Something bad happened... ({error.message})
    <Button onClick={() => window.location.reload()}>Try again</Button>
  </Wrapper>
);

export default Error;
