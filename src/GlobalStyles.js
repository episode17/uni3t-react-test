import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: verdana, arial, helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.25;
    color: ${props => props.theme.bodyTextColor};
    background: ${props => props.theme.bodyBgColor};
  }

  h1,
  h2 {
    font-size: inherit;
    font-weight: normal;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.linkColor};
  }
`;

export default GlobalStyles;
