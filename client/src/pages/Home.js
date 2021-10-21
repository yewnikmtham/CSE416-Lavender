import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar';
import { CssBaseline } from '@material-ui/core';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: { 
    minHeight: '100vh',
    backgroundColor: "#E6E6FA",
    backgroundRepeat: "no-repeat"
  },
  drawer: {
    backgroundColor: "#E6E6FA",
  },
}));

function Home() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
          <CssBaseline/>
          <Sidebar className={classes.drawer}/>
        </Box>
    )
}

export default Home;
