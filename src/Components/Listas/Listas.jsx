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
    //const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (id) => {
       //setSelectedIndex(id);
       onGetNewsFeed(id);
    };
  
    const Styles = useStyles();
    const items = CategoryData;
    return (
        <>
            <List component='nav'>
                {items.map((item) => (
                    <Link to={(item.id !== 0 ? `/${item.categoryName}/${item.id}`: `/`)} key={item.id} className={Styles.link}>
                        <ListItem button onClick={() => { handleListItemClick(item.id); }}>
                            <ListItemText primary={item.categoryName}/>
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