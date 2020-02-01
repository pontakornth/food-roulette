import { theme as defaultTheme, ITheme as _ITheme } from '@chakra-ui/core';

const theme: _ITheme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    heading: "'Mitr', sans-serif",
    body: "'Itim', sans-serif",
  },


};

export default theme;
