import React from 'react';
import PropTypes from 'prop-types';
//Components
import Cards from '../Card/Card.jsx';
import { LinearProgress } from '@material-ui/core';


const NewsFeedList = ( { NewsFeed, hasError, isLoading }) => {
    if (hasError) {
        return (
          <>
            <h6>Sorry! There was an error loading the NewsFeed.</h6>
          </>
        )
      }

      if (isLoading) {
        return (
          <>
            <LinearProgress color="secondary" />
          </>
        )
      }
      
    return (
        <>
            <Cards NewsFeed={NewsFeed.slice(0,59)}/>
        </>
    )
}

NewsFeedList.propTypes = {
    NewsFeed: PropTypes.array,
    hasError: PropTypes.bool,
    isLoading: PropTypes.bool
}

export default NewsFeedList
