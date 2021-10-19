import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Drawer, Toolbar, Box, List, ListItem, ListItemText, ListItemIcon, Divider, Typography} from '@material-ui/core'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Profile from "./Profile"
import Platform from "./Platform"

const drawerWidth = 240;

function Home() {
    return (
        <div className="home-page">
          <Box sx={{display: 'flex'}}>
            <Router>
              <Drawer
                variant="permanent"
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
              >
              <Toolbar/>
              <Box sx={{ overflow: 'auto' }}>
                <List>
                  <Link to="/profile">
                    <ListItem button key={"View Profile"}>
                      <ListItemIcon>
                          <AccountCircleIcon/> 
                      </ListItemIcon>
                      <ListItemText primary={"View Profile"}/>
                    </ListItem>
                  </Link>
                  <Link to="/platform">
                    <ListItem button key={"Create Platform"}>
                      <ListItemIcon>
                          <AddCircleOutlineIcon/> 
                      </ListItemIcon>
                      <ListItemText primary={"Create Platform"}/>
                    </ListItem>
                  </Link>
                </List>

                <Divider/>
                
                <h3>Top 10 Sprouts</h3>
                <List>
                    {['Bob123', 'Surprised_Pikachu', 'judy', 'steven', 'annie', 'michelle'].map((text, index) => (
                      <ListItem>
                        <ListItemText primary={(index+1) + '\t' + text}/>
                      </ListItem>
                    ))}
                </List>
              </Box>
              </Drawer>

              <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                <Typography paragraph>
                  Platforms and quizzes
                  {/* LIST OUT PLATFORMS AND QUIZZES HERE */}
                </Typography>
              </Box>
              <Switch>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/platform" exact component={Platform}/>
              </Switch>
            </Router>
          </Box>
        </div>
    )
}

export default Home;
