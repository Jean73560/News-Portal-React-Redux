import { connect } from 'react-redux';
import NewsFeedList from '../Components/NewsFeed/NewsFeedList.jsx';
import { getNewsFeed } from '../Actions/actions.js'

const mapStateToProps = state => ({
  NewsFeed: state.NewsFeedList,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
})

const mapDispatchToProps = (dispatch) => ({
  onGetNewsFeed: (id) => dispatch(getNewsFeed(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeedList)