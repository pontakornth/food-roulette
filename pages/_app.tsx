import { theme as defaultTheme, CSSReset } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
const App = ({Component, pageProps}) => (
  <ThemeProvider theme={defaultTheme}>
      <CSSReset />
      <Component {...pageProps} />
  </ThemeProvider>
)

export default App;