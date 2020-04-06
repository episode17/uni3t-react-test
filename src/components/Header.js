import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

import { Sun, Moon } from 'react-feather';

import Button from './Button';
import Select from './Select';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
`;

const Header = ({ sort, onSortChange }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <Wrapper>
      <Title>
        <Link to="/">Didit</Link>
      </Title>
      <Nav>
        <Select value={sort} onChange={e => onSortChange(e.target.value)}>
          <option value="best">Best</option>
          <option value="hot">Hot</option>
          <option value="new">New</option>
          <option value="rising">Rising</option>
          <option value="controversial">Controversial</option>
          <option value="top">Top</option>
          <option value="!!broken!!">!!Broken!!</option>
        </Select>
        <Button onClick={toggleDarkMode}>
          {isDarkMode ? <Moon /> : <Sun />}
        </Button>
      </Nav>
    </Wrapper>
  );
};

Header.propTypes = {
  sort: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired
};

export default Header;
