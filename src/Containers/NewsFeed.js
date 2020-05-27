import { connect } from 'react-redux';
import NewsFeedList from '../Components/NewsFeed/NewsFeedList.jsx';

const mapStateToProps = state => ({
  NewsFeed: state.NewsFeedList,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
})

export default connect(
  mapStateToProps,
  null
)(NewsFeedList)