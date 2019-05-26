import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

const AddTodo = ({ index, onTodoAdd }) => {

  const [text, setText] = useState('')

  return (
    <div onKeyPress={e => {
      if(e.key === 'Enter' && text.trim().length !== 0) {
        onTodoAdd(index, text)
      }
    }}
    >
      <Input onChange={e => setText(e.target.value)} autoFocus />
      <Button 
      variant="outlined" 
      color="primary" 
      onClick={() => {
        if(text.trim().length !== 0 ) {
          onTodoAdd(index, text)
        }
      }}
      > 
        add 
      </Button>
    </div>
  )
}

export default AddTodo