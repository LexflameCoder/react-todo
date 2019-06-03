import React from 'react'
import { makeStyles } from '@material-ui/styles'

import CardItemConnector from './CardItemConnector'
import GridList from '@material-ui/core/GridList'


const useStyles = makeStyles(() => ({
  gridList: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  }
})) 

const Cards = ({ cards }) => {
  const classes = useStyles()
  return (
    <GridList className={classes.gridList}>
      {cards.map((item, index) => <CardItemConnector key={item.key} index={index} text={item.text} />)}
    </GridList>
  )
}

export default Cards
