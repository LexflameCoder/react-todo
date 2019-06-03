import React from 'react';
import { connect } from 'react-redux'
import { dropTodo } from './actions'
import { DragDropContext } from 'react-beautiful-dnd' 
import './App.css';
import AddCardConnector from './AddCard/AddCardConnector'
import Grid from '@material-ui/core/Grid'
import CardsConnector from './Cards/CardsConnector'
import ChecklistPopupConnector from './Checklist/ChecklistPopupConnector'





let App = ({ dispatch }) => {

  // const onDragStart = object => {
  //   const { draggableId } = object;
  // }

  const onDragEnd = result => {
    const { draggableId, source, destination } = result;
    if(!destination) return;
    if(source.droppableId === destination.droppableId && source.index === destination.index) return;

    dispatch(dropTodo(destination.droppableId, draggableId, source.index, destination.index))
  }
  
  return (
    <DragDropContext 
      // onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div className="App">
        <ChecklistPopupConnector />
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <div name="cards">
            <CardsConnector />
          </div>
          <AddCardConnector />
        </Grid>
      </div>
    </DragDropContext>
  );
}

App = connect()(App)

export default App;
