import React, { useState } from 'react'

import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

const AddCheckPoint = ({ cardIndex, todoIndex, onClick }) => {

  const [text, setText] = useState('')

  return (
    <div>
      <Input 
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button 
        color="primary" 
        variant="contained"
        onClick={() => onClick(cardIndex, todoIndex, text)}
      > 
      ADD POINT 
      </Button>
    </div>
  )
}

export default AddCheckPoint