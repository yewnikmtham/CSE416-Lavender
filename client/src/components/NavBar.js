import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Button, Toolbar} from '@material-ui/core';
import sproutLogo from "../images/sprout.png";
import googleLogin from "../images/google-login-button.png";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SearchBar from 'material-ui-search-bar'
import { grey } from '@material-ui/core/colors';
import Home from "../pages/Home"
import Leaderboard from "../pages/Leaderboard"

const useStyles = makeStyles((theme) => ({
    AppBar:{ 
        backgroundColor: "#241452",
        height: 63,
        zIndex: 1250,
    },
    icon:{
        float: 'left', 
        marginLeft: "20px",
    },
    leader:{ 
        float:'right',
        color: "#FFFFFF"
    },
    google:{ 
        float:'right', 
        
    }, 
    search:{ 
        border:1, 
        borderColor:grey, 
        borderRadius: 30, 
        margin: '0 auto',
        width: 600,
        height: 35,
    }
})); 

export default function NavBar() {
    const classes = useStyles();
    return(
        <div> 
            <Router>
                <AppBar className={classes.AppBar} elevation={0}> 
                    <Toolbar>
                        <Link to="/"><IconButton p={50} className={classes.icon}>
                            <img float='left' width="90" height="50" alt="sproutlogo" src={sproutLogo}/></IconButton>
                        </Link> 
                        <SearchBar className={classes.search} placeholder="Search..."/>
                        <Link to='/leaderboard'>
                            <Button className={classes.leader}>Leaderboard</Button>
                        </Link>
                        <IconButton className={classes.google}> 
                            <img width="155" height="35" alt="google-signin" src={googleLogin}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
               <Switch>
                   <Route path="/" exact component={Home}/>
                   <Route path="/leaderboard" exact component={Leaderboard}/>
               </Switch>
            </Router>
        </div>
    );
}