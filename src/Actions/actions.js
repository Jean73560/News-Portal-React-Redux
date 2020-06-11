import Moment from "moment"; 
export const loadingError = bool => (
    {
      type: 'LOADING_ERROR',
      hasErrored: bool
    }
  )
  
  export const loadingInProgress = bool => (
    {
      type: 'LOADING_IN_PROGRESS',
      isLoading: bool
    }
  )
  
  export const loadingSuccess = newsFeed => (
    {
      type: 'LOADING_SUCCESS',
      newsFeed
    }
  )

  export const clearRepos = () => (
    {
      type: 'CLEAR_REPOS'
    }
  )
  

  export const getNewsFeed = (categoryId, SearchName = "") => {
    return dispatch => {

      dispatch(clearRepos())
  
      dispatch(loadingError(false))
  
      dispatch(loadingInProgress(true))

      const ApiUrl = SelectApiUrl(categoryId, SearchName);

      fetch(ApiUrl)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
  
          dispatch(loadingInProgress(false))
  
          return response
        })
        .then((response) => response.json())
        .then((newsFeed) => dispatch(loadingSuccess(newsFeed)))
        .catch(() => dispatch(loadingError(true)))
    }
  }
  
  const SelectApiUrl = (categoryId, SearchName = "") => {
    const today = Moment().format("YYYY-MM-DD");
      if(categoryId === 0){
          return(`https://api.canillitapp.com/latest/${today}`)
      } else if (categoryId === 7){
        return(`https://api.canillitapp.com/search/${SearchName}`)
      } else {
          return(`https://api.canillitapp.com/news/category/${categoryId}`)
      }
  }
  