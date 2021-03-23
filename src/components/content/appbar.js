import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { white } from 'material-ui/styles/colors';
import {fade} from '@material-ui/core/styles';  

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';


// import './style.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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
  }));



export default function Appbar() {
    const classes = useStyles();
    const [lang, setLang] = React.useState('');
    const handleChange = (event) => {
      setLang(event.target.value);
    };
  
  
    return (
        <div className={classes.root}>
        <AppBar position="static" color='inherit' elevation={0}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton> */}
            <IconButton aria-label="Home" color="inherit" component={Link} to="./">
              <HomeIcon/>
            </IconButton>
            
            <Typography className={classes.title} variant="h6" noWrap>
                {'VERITAS'}
            </Typography>
            <div className={classes.search}>
              
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={lang}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>English</MenuItem>
                  {/* <MenuItem value={20}>Hindi</MenuItem> */}
                </Select>
                <FormHelperText></FormHelperText>
              </FormControl>
              
              </div>
              
              <Button className={classes.loginButton}>
                <b>Login</b>
              </Button>
          
          </Toolbar>
        </AppBar>
        </div>
    )
}