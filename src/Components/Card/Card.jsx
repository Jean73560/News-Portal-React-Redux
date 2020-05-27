import React from 'react'
import { makeStyles, Typography , Grid, Card, CardMedia, CardContent, CardActionArea } from '@material-ui/core'
import Moment from "moment";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    link:{
        color:"rgba(245, 0, 87, 0)"
    }
  });
  
 const Cards = (props) => {
    const Styles = useStyles();
    const items = props.NewsFeed;
    
    return (
        <>
            <Grid container spacing={2}>
                {
                   items.map((item, index) => {
                    return(
                        <Grid key={item.news_id} item xs={12} sm={6} md={4} lg={3}>
                            <a href={item.url} target="_blank" className={Styles.link}>
                            <Card className={Styles.root}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={item.img_url}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography variant="body1" component="p">
                                            {item.title}
                                        </Typography>        
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Diario: {item.source_name}
                                        </Typography>
                                        {item.category !== null &&
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Categoria: {item.category}
                                            </Typography>
                                        }
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Fecha: {Moment(item.date * 1000).format("YYYY-MM-DD")}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </a> 
                        </Grid>
                    )
                    }) 
                }
            </Grid>
        </>
    )
}
export default  Cards;