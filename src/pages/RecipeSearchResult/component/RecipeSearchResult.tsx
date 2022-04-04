import {FC, useState, useEffect} from "react";
import {Props} from "./Types";
import Image from 'material-ui-image';
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import {ImageList, 
    ImageListItem, 
    ImageListItemBar,
    ListSubheader,IconButton} 
    from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
        },
        imageList: {
          width: 900,
          height: 1000,
        },
        icon: {
          color: 'rgba(255, 255, 255, 0.54)',
        },
      }));

const RecipeSearchResultDisplay : FC <Props> = ({foodresult}) => {
    const [recipies, setRecipies] = useState<Array <any>>([])
    const history = useHistory()

    useEffect(() => {
        foodresult.map(val => (
            setRecipies(val.hits)
        ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },([foodresult]))
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <ImageList rowHeight={350} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={8} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>
        {recipies.map((item) => (
          <ImageListItem key={item.recipe.image}>
            <Image src={item.recipe.image} alt={item.recipe.label} />
            <ImageListItemBar
              title={item.recipe.label}
              subtitle={<span>by: {item.recipe.source}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.recipe.label}`} className={classes.icon} onClick={e=> history.push("/recipe/display", item.recipe.label)} >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
        </div>
    )
}

export default RecipeSearchResultDisplay