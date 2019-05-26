import { connect } from 'react-redux'
import { addCard } from '../actions'
import AddCard from './AddCard'

const mapDispatchToProps = dispatch => {
  return {
    onCardAdd: text => dispatch(addCard(text))
  }
}

const AddCardConnector = connect(null, mapDispatchToProps)(AddCard)

export default AddCardConnector