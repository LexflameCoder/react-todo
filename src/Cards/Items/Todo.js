import React, { useState } from 'react'
import { styled } from '@material-ui/core/styles'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Input from '@material-ui/core/Input'
import Fab from '@material-ui/core/Fab'

const MyFab = styled(Fab)({
  boxShadow: 'none'
})

const Todo = ({ text, cardIndex, todoIndex, onDelete, editing, onEdit }) => {

  const [todoText, setTodoText] = useState(text)

  const html = editing ?
    <Input 
      onChange={e => setTodoText(e.target.value)} 
      value={todoText}
      autoFocus 
      disabledUnderline 
    />
    :
    <ListItemText primary={text} />

  return (
    <ListItem index={todoIndex} onKeyPress={e => {
      if(e.key === 'Enter' && todoText.trim() !== 0) {
        onEdit(cardIndex, todoIndex, todoText)
      }
    }}>
      <ListItemText primary={`${todoIndex + 1}.`} />
      { html }
      <MyFab 
        size="small" 
        color="secondary"
        onClick={() => onEdit(cardIndex, todoIndex, todoText)}
      >
        <i class="material-icons">
          edit
        </i>
      </MyFab>
      <MyFab 
        size="small"
        onClick={() => onDelete(cardIndex, todoIndex)}
      > 
        <i class="material-icons">
          delete
        </i>  
      </MyFab>
    </ListItem>
  )
}

export default Todo
