import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Drawer, Toolbar, Box, List, ListItem, ListItemText, ListItemIcon, Divider, Typography} from '@material-ui/core'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

function Home() {
    return (
        <div className="home-page">
          <Box sx={{display: 'flex', backgroundColor: "#E6E6FA"}}>
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
                  {['View Profile', 'Create Platform'].map((text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <AccountCircleIcon/> : <AddCircleOutlineIcon/>}
                      </ListItemIcon>
                      <ListItemText primary={text}/>
                    </ListItem>
                  ))}
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
          </Box>
        </div>
    )
}

export default Home;
