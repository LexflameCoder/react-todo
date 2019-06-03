import { connect } from 'react-redux'
import { toggleEditTodo, deleteTodo, showChecklist } from '../actions'

import CardItem from './CardItem'

const mapStateToProps = (state, ownProps) => {
  return {
    index: ownProps.index,
    text:  ownProps.text,
    todos: state.cards[ownProps.index].todos,
    id: state.cards[ownProps.index].id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEdit: (cardIndex, todoIndex, todoText) => dispatch(toggleEditTodo(cardIndex, todoIndex, todoText)),
    onDelete: (cardIndex, todoIndex) => dispatch(deleteTodo(cardIndex, todoIndex)),
    showChecklist: (cardIndex, todoIndex, todoTitle, points) => dispatch(showChecklist(cardIndex, todoIndex, todoTitle, points))
  }
}

const CardItemConnector = connect(mapStateToProps, mapDispatchToProps)(CardItem)

export default CardItemConnector