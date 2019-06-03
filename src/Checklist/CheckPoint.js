import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const CheckPoint = ({ index, text }) => {
  return (
    <ListItem index={index}>
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default CheckPoint