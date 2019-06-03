import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { styled } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import Todo from './Items/Todo'
import AddTodoConnector from '../AddTodo/AddTodoConnector'

const MyCard = styled(Card)({
  padding: '5px 15px 20px',
  minWidth: '200px',
})

const CardItem = ({ id, index, text, todos, onEdit, onDelete, showChecklist }) => {
  return (
    <MyCard index={index}>
      <h3> { text } </h3>
      <hr />
      <AddTodoConnector index={index} />
      <hr />
      <Droppable droppableId={id}>
        {(provided) => (
          <List
            {...provided.droppableProps}
            innerRef={provided.innerRef}
          >
            {todos.map((todo, indx) => <Todo 
              cardIndex={index}
              key={todo.key} 
              id={todo.id}
              points={todo.points}
              onEdit={onEdit} 
              onDelete={onDelete}
              editing={todo.editing} 
              text={todo.text} 
              todoIndex={indx} 
              onClick={showChecklist}
            />
            )}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </MyCard>
  )
}

export default CardItem