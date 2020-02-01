/* eslint-disable react/jsx-props-no-spreading */
import { CSSReset } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import theme from '../theme';

const App = ({ Component, pageProps }: any) => (
  <ThemeProvider theme={theme}>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Itim|Mitr&display=swap" rel="stylesheet" />
    </Head>
    <CSSReset />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
