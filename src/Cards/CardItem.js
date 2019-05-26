import React from 'react'
import { styled } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import Todo from './Items/Todo'
import AddTodoConnector from '../AddTodo/AddTodoConnector'

const MyCard = styled(Card)({
  padding: '5px 15px 20px',
  minWidth: '200px',
})

const generateID = () => {
  return Math.random().toString(36).substring(2, 15);
}

const CardItem = ({ index, text, todos, onEdit, onDelete }) => {
  return (
    <MyCard index={index}>
      <h3> { text } </h3>
      <hr />
      <AddTodoConnector index={index} />
      <hr />
      <List>
        {todos.map((todo, indx) => <Todo 
          cardIndex={index}
          key={generateID()} 
          onEdit={onEdit} 
          onDelete={onDelete}
          editing={todo.editing} 
          text={todo.text} 
          todoIndex={indx} 
        />
        )}
      </List>
    </MyCard>
  )
}

export default CardItem