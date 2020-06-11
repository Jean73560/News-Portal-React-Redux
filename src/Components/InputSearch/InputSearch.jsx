import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { InputBase  } from '@material-ui/core';
import PropTypes from "prop-types";
import useStyles from './InputSearch-Styles.js';
import CategoryData from '../../CategoryData.js';

const InputSearch = ({onGetNewsFeed}) => {
    const Styles = useStyles();
    const handleOnClick = event => {
        const { value } = event.target

        if(value.length >= 3){
            onGetNewsFeed(7, value);
        }else if(value.length === 0){
            const category = CategoryData.find(a => a.pathname === window.location.pathname);
            onGetNewsFeed(category.id);
        }
    }
    return (
        <div className={Styles.search}>
            <div className={Styles.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: Styles.inputRoot,
                    input: Styles.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(event) => { handleOnClick(event) }}
            />
         </div>
    )
}

InputSearch.propTypes = {
    onGetNewsFeed: PropTypes.func
};

export default InputSearch
