import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Hidden } from '@material-ui/core'
import useStyles from './Navbar-Styles.js';
import TabsPanel from '../../Containers/TabsPanel.js';


 const Navbar = (props) => {
     const Styles = useStyles();

    return (
            <AppBar position="fixed" className={Styles.appBar} >
              <Toolbar>
                <IconButton className={Styles.menuButton} aria-label="menu" color='inherit' onClick={() => props.handleDrawerToggle()}>
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={Styles.title} noWrap>
                  News Feed
                </Typography>
                <Hidden smDown>
                  <TabsPanel/>
                </Hidden>
              </Toolbar>
            </AppBar>
    )
}
export default Navbar;
