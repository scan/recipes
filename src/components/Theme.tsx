import type { FunctionComponent } from 'react';

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=FFA726

import { createTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';

export const defaultTheme = createTheme({
  palette: {
    error: red,
    primary: indigo,
    secondary: orange,
  },
});

const Theme: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

Theme.displayName = 'Theme';

export default Theme;
