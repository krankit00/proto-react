const { news_article1, news_article2, news_article3, news_article4 } = require('./database.js')
import Timeline from './timeline';

export default function ComplexGrid() {
    const classes = useStyles();
    const [lang, setLang] = React.useState('');
    const handleChange = (event) => {
      setLang(event.target.value);
    };
  
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color='inherit' elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
            <Link to="./" style={{textDecoration: 'inherit', color: 'black'}}>
                {'VERITAS'}
              </Link>
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
                  <MenuItem value={20}>Hindi</MenuItem>
                </Select>
                <FormHelperText></FormHelperText>
              </FormControl>
              
              </div>
              
              <Button className={classes.loginButton}>
                <b>Login</b>
              </Button>
          
          </Toolbar>
        </AppBar>
        
        
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <Typography gutterBottom variant="subtitle1" variant="h5" >
              <b>2020 Hathras Gang Rape and Murder Case </b> <br></br>
         </Typography>
         <Typography variant="caption">
             19 Oct 2020, Monday
         </Typography>
         <Typography variant="body2" color="textSecondary">
           <ul>
           <li>There are some news sources which reported that the victim was cremated in the middle of the night without the 
               permission of the family and the authorities are misleading people saying the family had been present at the funeral. [1]<br></br><br></br>
           </li>
           <li>There are some news sources which reported that the police had taken permissions from the family prior to 
               cremation and the family was now lying. [2]<br></br><br></br>
          </li>
           <li>Some news sources reported that the UP administration and police have clearly established using forensic 
               evidence that no rape occured. [3]<br></br><br></br>
           </li>
           <li>Some news have reported that the administration is pushing false propoganda and questioned the analysis of “no 
               rape” with the victims official statement mentioning rape. [4]<br></br><br></br>
           </li>
           </ul>
         </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography display='flex'>
               <Link color='inherit'>[1] The Wire</Link> <br></br>
               <Link color='inherit'>[2] TIMES NOW </Link> <br></br>
               <Link color='inherit'>[3] Hindustan Times</Link> <br></br>
               <Link color='inherit'>[4] Scroll</Link> <br></br>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      <Timeline/>
      </div>
    );
  }