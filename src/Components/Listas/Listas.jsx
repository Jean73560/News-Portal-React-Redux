import React from 'react'
import {List, ListItem, ListItemText, Divider, makeStyles} from '@material-ui/core';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CategoryData from '../../CategoryData.js';

const useStyles = makeStyles({
    link:{
        color:"rgba(255, 255, 255, 0.99)"
    }
  });
const Listas = ({onGetNewsFeed}) => {
    const Styles = useStyles();
    const items = CategoryData;
    const handleOnClick = id => {
        onGetNewsFeed(id);
    }
    return (
        <>
            <List component='nav'>
                {items.map((item) => (
                    <Link to={item.pathname} key={item.id} className={Styles.link}>
                        <ListItem button>
                            <ListItemText primary={item.categoryName} onClick={() => { handleOnClick(item.id) }}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
        </>
    )
}

Listas.propTypes = {
    onGetNewsFeed: PropTypes.func
};

export default Listas