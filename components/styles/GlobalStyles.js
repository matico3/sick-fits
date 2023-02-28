import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;

  }
  html {
    --red: #f54242;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --midGray: #5e5e5e;
    --midGrey: var(--midGray);
    --lightGrey: #d3d3d3;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --box-sizing: border-box;
    font-size: 0.625rem;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5 rem;
    line-height: 2;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
    color: var(--black);
    
  }
  a&:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  button {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  

`;

export default GlobalStyles;
