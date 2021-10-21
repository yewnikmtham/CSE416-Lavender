import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar';

const useStyles = makeStyles((theme) => ({
  root: { 
    minHeight: '100vh',
    backgroundColor: "#E6E6FA",
    backgroundRepeat: "no-repeat"
  },
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Sidebar/>
        </div>
    )
}

export default Home;
