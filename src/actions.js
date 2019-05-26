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