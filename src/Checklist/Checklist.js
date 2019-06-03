import React, { useEffect } from 'react'


import List from '@material-ui/core/List'
import CheckPoint from './CheckPoint'

const Checklist = ({ points }) => {

  useEffect(() => {
    console.log(points)
  })

  return (
      <List>
        {points.map((point, index) => <CheckPoint key={point.key} index={index} text={point.text} />)}
      </List>
  )
}

export default Checklist