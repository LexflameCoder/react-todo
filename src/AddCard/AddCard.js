import React, { useState } from 'react'
import { styled } from '@material-ui/styles'
import './add.css'

import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import Fab   from '@material-ui/core/Fab'

const MyButton = styled(Button)({
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  color: "#fff",
  width: "150px"
})

const MyFab = styled(Fab)({
  boxShadow: 'none'
})

const AddCard = ({ onCardAdd }) => {

  const [value, setValue] = useState('')
  const [slide, setSlide] = useState(false)

  const input = React.createRef()

  return (
    <div 
      style={{alignSelf: "center"}} 
      onKeyPress={(e => {
        if(e.key === 'Enter' && value.trim().length === 0) {
          setSlide(false)
        }
      })}
    >
      <MyButton
        onClick={() => {
          setSlide(true)
          setTimeout(() => {
            document.getElementById('input').focus()
          }, 100)
      }}
        fullWidth
      > 
        + ADD CARD
      </MyButton>
      <Slide 
        direction="down" 
        in={slide} 
      >
      <Paper 
        onKeyPress={e => {
          if(e.key === 'Enter' && value.trim().length !== 0) {
            setSlide(false)
            onCardAdd(value)
            setValue('')
          }
        }}
      >
        <Input
          id="input"
          inputRef={input}
          value={value} 
          onChange={e => setValue(e.target.value)} 
          autoFocus={slide}
        />
        <MyFab 
          size="small" 
          onClick={() => {
            if(value.trim().length !== 0) {
            setSlide(false)
            onCardAdd(value)
            setValue('')
            } else {
              setSlide(false)
            }
          }}
        > 
          + 
        </MyFab>
      </Paper>
    </Slide>
    </div>
  )
}

export default AddCard