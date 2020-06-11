import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import Cards from '../Card/Card.jsx';
import { Grid, LinearProgress } from '@material-ui/core';
import InputSearch from '../../Containers/InputSearch.js';
import Paginations from '../Pagination/Pagination.jsx';

class NewsFeedList extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage: 1,
      newsFeedPerPage: 10
    }
  }
  
componentDidMount(){
  this.props.onGetNewsFeed(this.props.categoryId)
}

  render() {
     // Get current posts
  const indexOfLastPost = this.state.currentPage * this.state.newsFeedPerPage;
  const indexOfFirstPost = indexOfLastPost - this.state.newsFeedPerPage;
  const currentNewsFeed = this.props.NewsFeed.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  //const handleChange = pageNumber => this.setState({currentPage: pageNumber});
  const handleChange = (event, value) => {
    this.setState({currentPage: value});
  };

    return (
      <>
        <Grid container spacing={2} direction="row" justify="flex-end" alignItems="flex-end">
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <InputSearch/>
          </Grid>
        </Grid>
        <br/>
       { this.props.isLoading === true ?
       <LinearProgress/>
      :
      <Cards NewsFeed={currentNewsFeed}/>
      }
      <Grid container spacing={2} direction="row" justify="flex-end" alignItems="flex-end">
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Paginations 
          currentPage={this.state.currentPage}
          newsFeedPerPage={this.state.newsFeedPerPage} 
          totalNewsFeed={this.props.NewsFeed.length} 
          handleChange={handleChange} 
          />
        </Grid>
      </Grid>

      </>
    );
  }
}

NewsFeedList.propTypes = {
  NewsFeed: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  onGetNewsFeed: PropTypes.func
};

export default NewsFeedList;
