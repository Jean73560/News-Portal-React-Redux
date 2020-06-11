import { connect } from 'react-redux';
import TabsPanel from '../Components/TabsPanel/TabsPanel.jsx';
import { getNewsFeed } from '../Actions/actions.js'

const mapDispatchToProps = (dispatch) => ({
  onGetNewsFeed: (id) => dispatch(getNewsFeed(id))
})

export default connect(
  null,
  mapDispatchToProps
)(TabsPanel)