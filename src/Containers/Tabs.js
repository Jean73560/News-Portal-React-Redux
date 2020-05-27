import { connect } from 'react-redux'
import { getNewsFeed } from '../Actions/actions.js'
import TabsPanel from '../Components/TabsPanel/TabsPanel.jsx';

const mapDispatchToProps = (dispatch) => ({
    onGetNewsFeed: (id) => dispatch(getNewsFeed(id))
})

export default connect(
  null,
  mapDispatchToProps
)(TabsPanel)