import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core'
import useStyles from './Navbar-Styles';
import InputSearch from '../InputSearch/InputSearch';
import TabsPanel from '../../Containers/Tabs.js';


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
                <TabsPanel/>
                <InputSearch/>
              </Toolbar>
            </AppBar>
    )
}
export default Navbar;
