import React from 'react'
import { Tabs, Tab, makeStyles } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import CategoryData from '../../CategoryData.js';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    link:{
        fontWeight: "bold",
        color:"white"
    }
  });

const TabsPanel = ({onGetNewsFeed}) => {
    const Styles = useStyles();
    const items = CategoryData;
    const handleOnClick = id =>{
        onGetNewsFeed(id);
    }
    return (
        
        <Tabs
          centered
        >
            {items.map((item) => (
                <NavLink exact to={item.pathname} key={item.id} className={Styles.link} activeStyle={{fontWeight: "bold", color:"#FF0080"}}>
                    <Tab label={item.categoryName} key={item.id} onClick={() => { handleOnClick(item.id) }}/>
                </NavLink>
                    
            ))}
        </Tabs>
      
    )
}


/*onClick={() => { handleOnClick(item.id) }}
            <Tabs variant="scrollable" aria-label="simple tabs example">
            {items.map((item) => (
                <Link to={item.pathname} key={item.id} className={Styles.link}>
                    <Tab label={item.categoryName} onClick={() => { handleOnClick(item.id) }}/>
                </Link>
            ))}
        </Tabs>
*/

export default TabsPanel
