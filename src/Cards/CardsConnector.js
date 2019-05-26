import { connect } from 'react-redux'
import Cards from './Cards'

const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

const CardsConnector = connect(mapStateToProps, null)(Cards)

export default CardsConnector