import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import {AppBar, Paper, Typography, Toolbar} from '@material-ui/core'
import LocationList from './componets/LocationList'
import ForecastExtended from './componets/ForecastExtended'
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

  onWeatherLocationClick = (city)=>{
    console.log('onWeatherLocationClick ' + city);
    this.setState({
      city
    })
  }
  constructor(){
    super()
    this.state = {
      city: null
    }
  }

  render() {
    const {city} = this.state
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
          <Col xs={12} md={ city ? 6 : 12}>
            <LocationList onWeatherLocationClick={this.onWeatherLocationClick} cities={cities}/>
          </Col>
          { city &&
            <Col xs={12} md={6}>
              <Paper elevation={5}>
                <div className="details forecast-extended-content">
                  <ForecastExtended city={city}/>
                </div>
              </Paper>
            </Col>
          }
        </Row>
      </Grid>
      // </MuiThemeProvider>
    );
  }
}

export default App;
