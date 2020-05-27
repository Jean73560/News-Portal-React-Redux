import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { InputBase  } from '@material-ui/core';
import useStyles from './InputSearch-Styles.js';

const InputSearch = () => {
    const Styles = useStyles();
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
            />
         </div>
    )
}

export default InputSearch
