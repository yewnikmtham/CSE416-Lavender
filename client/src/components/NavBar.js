import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Button, Toolbar} from '@material-ui/core';
import sproutLogo from "../images/sprout.png";
import googleLogin from "../images/google-login-button.png";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SearchBar from 'material-ui-search-bar'
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    AppBar:{ 
        backgroundColor: "#241452"
    },
    icon:{
        float: 'left', 
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
        width: 500,
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
                    <img float='left' width="90" height="50"src={sproutLogo}/></IconButton>
                </Link> 
                <SearchBar className={classes.search} placeholder="Search..."/>
                <Link to='/Leaderboard'>
                    <Button className={classes.leader}>Leaderboard</Button></Link>
                <IconButton className={classes.google}> 
                    <img width="200" height="50"src={googleLogin}/></IconButton>
            </Toolbar>
            </AppBar>
            </Router>
        </div>
    );
}