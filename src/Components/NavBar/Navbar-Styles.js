import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    menuButton:{
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        //width: `calc(100% - ${150}px)`,
        marginLeft: 240,
      },
      backgroundColor: theme.palette.background.paper
    }
}));

export default useStyles;