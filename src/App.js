import React from 'react';
import './App.css';
import AddCardConnector from './AddCard/AddCardConnector'
import Grid from '@material-ui/core/Grid'
import CardsConnector from './Cards/CardsConnector'






const App = () => {
  return (
    <div className="App">
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <div name="cards">
          <CardsConnector />
        </div>
        <AddCardConnector />
      </Grid>
    </div>
  );
}

export default App;
