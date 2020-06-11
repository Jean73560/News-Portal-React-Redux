import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Paginations = ({currentPage, newsFeedPerPage, totalNewsFeed, handleChange }) => {

  const Styles = useStyles();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNewsFeed / newsFeedPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={Styles.root}>
        <Pagination count={pageNumbers.length} page={currentPage} onChange={handleChange}/>
    </div>
  );
};

export default Paginations;