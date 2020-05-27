import React from 'react'
import { Tabs, Tab, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import CategoryData from '../../CategoryData.js';
const useStyles = makeStyles({
    link:{
        color:"rgba(255, 255, 255, 0.99)"
    }
  });
const TabsPanel = ({onGetNewsFeed}) => {
    const Styles = useStyles();
    const items = CategoryData;
    //Releaizamos la carga inicial
    onGetNewsFeed(0);

    const handleListItemClick = (id) => {
        onGetNewsFeed(id);
     };
    
    return (
        <Tabs variant="scrollable" aria-label="simple tabs example">
            {items.map((item) => (
                <Link to={(item.id !== 0 ? `/${item.categoryName}/${item.id}`: `/`)} key={item.id} className={Styles.link}>
                    <Tab label={item.categoryName} onClick={() => { handleListItemClick(item.id); }} />
                </Link>
            ))}
        </Tabs>
    )
}

export default TabsPanel
