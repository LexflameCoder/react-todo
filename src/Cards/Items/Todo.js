import React, { useState } from 'react'
import { styled } from '@material-ui/core/styles'
import { Draggable } from 'react-beautiful-dnd'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Input from '@material-ui/core/Input'
import Fab from '@material-ui/core/Fab'

const MyFab = styled(Fab)({
  boxShadow: 'none'
})

const MyListItem = styled(ListItem)({
  backgroundColor: `${props => props.backgroundcolor}`
})

const Todo = ({ id, text, cardIndex, todoIndex, points, onDelete, editing, onEdit, onClick }) => {

  const [todoText, setTodoText] = useState(text)

  const html = editing ?
    <Input 
      name="list-input"
      onChange={e => setTodoText(e.target.value)} 
      value={todoText}
      autoFocus 
    />
    :
    <ListItemText name="list-text" primary={todoText} />

  return (
    <Draggable draggableId={id} index={todoIndex}>
      {(provided, snapshot) => (
        <MyListItem 
          name="list-item"
          {...provided.draggableProps}
          innerRef={provided.innerRef}
          index={todoIndex} 
          isdragging={snapshot.isDragging.toString()}
          onKeyPress={e => {
            if(e.key === 'Enter' && todoText.trim() !== 0) {
              onEdit(cardIndex, todoIndex, todoText)
            }
          }}
          onClick={e => {
            if(e.target.getAttribute('name') === 'list-item'  ||
               e.target.getAttribute('name') === 'list-input' ||
               e.target.getAttribute('name') === 'list-text') {
              onClick(cardIndex, todoIndex, todoText, points)
            }
          }}
          button
        >
          <div {...provided.dragHandleProps} style={{
            width: '24px',
            height: '24px',
            marginRight: '10px',
            borderRadius: '20%',
            backgroundColor: '#E66F00'
          }}
          ></div>
          { html }
          <MyFab 
            size="small" 
            color="secondary"
            onClick={() => onEdit(cardIndex, todoIndex, todoText)}
          >
            <i className="material-icons">
              edit
            </i>
          </MyFab>
          <MyFab 
            size="small"
            onClick={() => onDelete(cardIndex, todoIndex)}
          > 
            <i className="material-icons">
              delete
            </i>  
          </MyFab>
        </MyListItem>
      )}
    </Draggable>
  )
}

export default Todo
