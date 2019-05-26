import { connect } from 'react-redux'
import { addTodo } from '../actions'

import AddTodo from './AddTodo'

const mapStateToProps = (state, ownProps) => {
  return {
    index: ownProps.index
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoAdd: (index, text) => dispatch(addTodo(index, text))
  }
}

const AddTodoConnector = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodoConnector