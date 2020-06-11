import React from 'react'
import { makeStyles, Drawer, Divider } from '@material-ui/core'
//Components
import Listas from '../../Containers/Listas.js';

//Styles
const useStyles = makeStyles(theme => ({
    drawer: {
        width: 150,
        flexShrink: 0,
      },
    drawerPaper:{
        width: 150
    },
    toolbar: theme.mixins.toolbar,
}))

 const Drawers = (props) => {
    const styles = useStyles();
    return (
        <Drawer
          className={styles.drawer}
          classes={{
            paper: styles.drawerPaper
          }}
          anchor="left"
          variant={props.variant}
          open={props.open}
          onClose={props.onClose ? props.onClose : null}
        >
          <div className={styles.toolbar} ></div>
          <Divider/>
          <Listas/>
        </Drawer>
    )
}
export default Drawers;