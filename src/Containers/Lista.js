import { connect } from 'react-redux'
import { getNewsFeed } from '../Actions/actions.js'
import Listas from '../Components/Listas/Listas.jsx';

const mapDispatchToProps = (dispatch) => ({
    onGetNewsFeed: (id) => dispatch(getNewsFeed(id))
})

export default connect(
  null,
  mapDispatchToProps
)(Listas)