export const addCard =  text => {
  return {
    type: 'ADD_CARD',
    text,
  }
}

export const addTodo = (index, text) => {
  return {
    type: 'ADD_TODO',
    index,
    text
  }
}

export const addCheckPoint = (cardIndex, todoIndex, text) => {
  return {
    type: 'ADD_CHECK_POINT',
    cardIndex,
    todoIndex,
    text
  }
}

export const toggleEditTodo = (cardIndex, todoIndex, todoText) => {
  return {
    type: 'TOGGLE_EDIT_TODO',
    cardIndex,
    todoIndex,
    todoText
  }
}

export const deleteTodo = (cardIndex, todoIndex) => {
  return {
    type: 'DELETE_TODO',
    cardIndex, 
    todoIndex
  }
}

export const dropTodo = (cardId, todoId, sourceIndex, destinationIndex) => {
  return {
    type: 'DROP_TODO',
    cardId,
    todoId,
    sourceIndex,
    destinationIndex
  }
}

export const showChecklist = (cardIndex, todoIndex, todoTitle, points) => {
  return {
    type: 'SHOW_CHECKLIST',
    cardIndex, 
    todoIndex,
    todoTitle,
    points : points,
  }
}

export const hideChecklist = () => {
  return {
    type: 'HIDE_CHECKLIST'
  }
}

