import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Switch, Route } from "react-router-dom";
import NewsFeed from '../../Containers/NewsFeed.js';

//Styles
const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        color: theme.palette.text.primary
      },
}))

const Main = () => {
    const styles = useStyles();
    return (
        <main className={styles.content}>
        <div className={styles.toolbar}/>
        <Switch>
            <Route
                path="/:categoryName/:categoryId"
                render={() => {
                    return <NewsFeed />;
                }}
                />
            <Route
                path="/"
                render={() => {
                    return <NewsFeed />;
                }}
                />
            </Switch>
    </main>
    )
}

export default Main
