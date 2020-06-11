import { connect } from 'react-redux';
import InputSearch from '../Components/InputSearch/InputSearch.jsx';
import { getNewsFeed } from '../Actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  onGetNewsFeed: (id, SearchName) => dispatch(getNewsFeed(id, SearchName))
})

export default connect(
  null,
  mapDispatchToProps
)(InputSearch)