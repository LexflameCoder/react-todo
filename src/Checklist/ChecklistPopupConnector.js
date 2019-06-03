import { connect } from 'react-redux'
import { hideChecklist } from '../actions'
import ChecklistPopup from './ChecklistPopup'

const mapStateToProps = state => {
  return {
    points: state.checklist.points,
    hidden : state.checklist.hidden,
    headline: state.checklist.headline,
    checklist: state.checklist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideChecklist: () => dispatch(hideChecklist)
  }
}

const ChecklistPopupConnector = connect(mapStateToProps, mapDispatchToProps)(ChecklistPopup)

export default ChecklistPopupConnector