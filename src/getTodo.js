export const getTodo = (todos, todoId) => {
  return todos.map(todo => todo.id === todoId)[0]
}