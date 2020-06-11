import { connect } from 'react-redux';
import Listas from '../Components/Listas/Listas.jsx';
import { getNewsFeed } from '../Actions/actions.js'

const mapDispatchToProps = (dispatch) => ({
  onGetNewsFeed: (id) => dispatch(getNewsFeed(id))
})

export default connect(
  null,
  mapDispatchToProps
)(Listas)