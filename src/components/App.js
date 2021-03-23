import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet'

import {fade} from '@material-ui/core/styles';  

import { white } from 'material-ui/styles/colors';


import Appbar from './content/appbar'

import HomepageCard from './content/homepageCard'


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

export default function ComplexGrid() {
  const classes = useStyles();
  const [lang, setLang] = React.useState('');
  const handleChange = (event) => {
    setLang(event.target.value);
  };


  return (
    <div className={classes.root}>
      <Helmet>
        <title>{ 'VERITAS' }</title>
        </Helmet>
      <Appbar/>
      <HomepageCard id={1}/>
      <HomepageCard id={2}/>
      <HomepageCard id={3}/>
      <HomepageCard id={4}/>
    </div>
  );
}

