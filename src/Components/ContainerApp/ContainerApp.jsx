import React from 'react'
import { makeStyles, Hidden } from '@material-ui/core'

//Components
import Navbar from './../NavBar/Navbar.jsx';
import Drawers from '../Drawer/Drawer.jsx';
import Main from '../Main/Main.jsx';

//Styles
const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex'
    }
}))

 const ContainerApp = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const styles = useStyles();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
        return (
            <div className={styles.root}>
                <Navbar handleDrawerToggle={handleDrawerToggle}/>

                <Hidden smUp>
                    <Drawers variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}/>
                </Hidden>
                <Main/>
            </div>
        )
    
}
export default ContainerApp;

