import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from 'react-redux'
import { saveFavourite, deleteFavourtie } from '../../Redux/Actions/favourite.actions'


const useStyles = makeStyles({
root: {
    maxWidth: 800
}
});

function ImgProfile(props) {

    const { isResult } = props

    const classes = useStyles();

    const dispatch =useDispatch()

    const handleSave = () => {
        dispatch(saveFavourite(props.AllData))
    }
    const handleDelete = () =>{
        dispatch(deleteFavourtie(props.AllData.id))
    }
    return (
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
        component="img"
        alt={props.AllData.alt_description}
        height= "450"
        image={props.AllData.urls.regular} 
        />

        </CardActionArea>
        <CardActions>
        <Typography gutterBottom variant="h5" component="h2">
        {props.AllData.user.name}
        </Typography>
        <div>
            { isResult ?
                <Button size="small" color="primary" onClick={handleSave}>
                <FavoriteIcon/>
                Favourite
                </Button> 
                :
                <Button size="small" color="secondary" onClick={handleDelete}>
                <DeleteIcon/>
                Delete
                </Button>
            }
        </div>
        </CardActions>
        </Card>
    );
    }

    export default ImgProfile