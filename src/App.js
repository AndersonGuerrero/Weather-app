import React, { Component } from 'react';
import { Row, Grid } from 'react-flexbox-grid';
import {AppBar, Typography, Toolbar} from '@material-ui/core'
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
const cities = [
  'Caracas,ve',
  'Buenos aires,arg',
  'Cucuta,col',
  'Washington,us',
  'Lima,pe'
]

class App extends Component {

  render() {
    return (
      // <MuiThemeProvider theme={theme}>
      <Grid fluid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                  Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>

        <Row className="row-app">
          <LocationListContainer cities={cities} />
          <ForecastExtendedContainer/>
        </Row>
      </Grid>
      // </MuiThemeProvider>
    );
  }
}

export default App
