import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import useDarkMode from './hooks/useDarkMode';
import * as themes from './themes';

const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode();
  const theme = {
    ...(darkMode.enabled ? themes.dark : themes.light),
    isDarkMode: darkMode.enabled,
    toggleDarkMode: darkMode.toggle
  };

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
