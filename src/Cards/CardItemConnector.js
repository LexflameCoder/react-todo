import { connect } from 'react-redux'
import { toggleEditTodo, deleteTodo } from '../actions'

import CardItem from './CardItem'

const mapStateToProps = (state, ownProps) => {
  return {
    index: ownProps.index,
    text:  ownProps.text,
    todos: state.cards[ownProps.index].todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEdit: (cardIndex, todoIndex, todoText) => dispatch(toggleEditTodo(cardIndex, todoIndex, todoText)),
    onDelete: (cardIndex, todoIndex) => dispatch(deleteTodo(cardIndex, todoIndex))
  }
}

const CardItemConnector = connect(mapStateToProps, mapDispatchToProps)(CardItem)

export default CardItemConnector