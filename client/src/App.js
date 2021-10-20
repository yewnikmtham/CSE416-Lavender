import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

//export default App;
const useStyles = makeStyles((theme) => ({
  root: { 
    minHeight: '100vh',
    backgroundColor: "#E6E6FA",
    backgroundRepeat: "no-repeat"
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className = {classes.root}> 
      <CssBaseline/> 
      <NavBar/>
    </div> 
  ); 
}