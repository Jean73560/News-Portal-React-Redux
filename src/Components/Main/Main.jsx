import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Switch, Route } from "react-router-dom";
import NewsFeed from '../../Containers/NewsFeed.js';
import CategoryData from '../../CategoryData.js';

//Styles
const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(4),
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
                path="/:categoryName/"
                render={({ match }) => {
                    const category = CategoryData.find(a => a.categoryName === match.params.categoryName);
                    return <NewsFeed categoryName={category.categoryName} categoryId={category.id}/>;
                }}
                />
            <Route
                path="/"
                render={() => {
                    return <NewsFeed categoryName="Home" categoryId={0}/>;
                }}
                />
            </Switch>
    </main>
    )
}

export default Main
