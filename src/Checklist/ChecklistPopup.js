import React, { useEffect } from 'react'
import { styled } from '@material-ui/styles'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import AddCheckPointConnector from './AddCheckPointConnector'
import Checklist from './Checklist'


const styles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: 99
}

const MyCard = styled(Card)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '600px',
  minHeight: '200px',
  zIndex: '100'
})

const CheckListPopup = ({ checklist, points, headline , hidden, hideChecklist }) => {

  useEffect(() => {
    console.log(checklist)
  })

  return (
    <div 
      name="popup-wrapper" 
      onClick={e => {
        if(e.target.getAttribute('name') !== 'popup-wrapper') return
        hideChecklist()
      }} 
      style={styles} 
      className="container" 
      hidden={hidden}
    >
      <MyCard>
        <h4> { headline } </h4>
        <AddCheckPointConnector />
        <Checklist points={points} />
      </MyCard>
    </div>
  )
}

export default CheckListPopup