/* eslint-disable react/jsx-props-no-spreading */
import { theme as defaultTheme, CSSReset } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
// import Head from 'next/head';

const App = ({ Component, pageProps }: any) => (
  <ThemeProvider theme={defaultTheme}>
    <CSSReset />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
