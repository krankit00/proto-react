import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import { white } from 'material-ui/styles/colors';
import {fade} from '@material-ui/core/styles';  
import {Link } from "react-router-dom";

import pic1 from './assets/news_article1.png';
import pic2 from './assets/news_article2.png';
import pic3 from './assets/news_article3.png';
import pic4 from './assets/news_article4.png';

const piclabel1 = pic1;
const piclabel2 = pic2;
const piclabel3 = pic3;
const piclabel4 = pic4;

const { news_article1, news_article2, news_article3, news_article4 } = require('./database.js')


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 1150,
      marginTop: 60,
      borderRadius: 12,
    },
    readButton: {
      backgroundColor: 'rgb(51,51,51)',
      color: white,
      height:30,
      fontWeight: 1000,
      fontSize: 15,
      borderRadius: 5,
    },
    loginButton: {
      backgroundColor: 'rgb(51,51,51)',
      color: white,
      height:30,
      fontWeight: 1000,
      fontSize: 15,
      borderRadius: 5,
      marginTop: theme.spacing(3),
    },
    image: {
      width: 256,
      height: 256,
      padding: theme.spacing(2),
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      marginTop: theme.spacing(1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '0ch',
        },
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

const HomepageCard = (props) => {
    const classes = useStyles();
    const article = eval('news_article' + props.id);
    const path = '/' + 'news_article' + props.id;
    // const img_src = article.img;
    const img_src = eval('piclabel' + props.id); 
    return (
        <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={2}>
          <Grid item>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" variant="h4" >
                <b>{article.headline}</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {article.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.content}
                </Typography>
              </Grid>
              <Grid item>      
                <Link color='inherit' to={path}>
                <button variant="contained" className={classes.readButton}>
                  Read Full Story
                  </button>
                </Link>
              </Grid>
            </Grid>
            <ButtonBase className={classes.image}>
              <img className={classes.img} src={img_src} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
        </div>
    )
}

export default HomepageCard;
// module.exports = img_src;