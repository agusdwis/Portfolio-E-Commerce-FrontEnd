import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#313043',
        },
        secondary: {
            main: '#ee190f',
        },
    },
});

ReactDOM.render(
  <React.Fragment>
      <MuiThemeProvider theme={theme}>
            <App />
      </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

serviceWorker.register();
