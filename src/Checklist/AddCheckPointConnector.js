import { connect } from 'react-redux'
import { addCheckPoint } from '../actions'

import AddCheckPoint from './AddCheckPoint'

const mapStateToProps = state => {
  return {
    cardIndex: state.checklist.cardIndex,
    todoIndex: state.checklist.todoIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (cardIndex, todoIndex, text) => dispatch(addCheckPoint(cardIndex, todoIndex, text))
  }
}

const AddCheckPointConnector = connect(mapStateToProps, mapDispatchToProps)(AddCheckPoint)

export default AddCheckPointConnector