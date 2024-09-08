'use client'
import React, { useState, useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import myImage from './Haru.jpg'
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import Content from './Content';
import Grid from '@mui/material/Grid';
import GridItem from '@mui/material/Grid'
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import { Breadcrumbs, Typography, Link, Divider, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import TimeLine from './TimeLine';


export default function ResponsiveDrawer() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 } // Adjust threshold as needed
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    if(isVisible) {
      // do something
    }

    return () => {
      if (observer && targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [isVisible]);

  const [isDrawOpen, setDrawOpen] = React.useState(false);
  const menuList = ['Home', 'Experience', 'LeetCode', 'About Me'];
  const toggleDrawer = (newOpen) => () => {
    setDrawOpen(newOpen);
  };
  
  const DrawerList = (
    <Box sx={{ width: 250, height: '100%',
        backgroundColor:"#ffffffc7" }} 
        role="presentation" 
        onClick={toggleDrawer(false)}
        paddingTop={5}
        >
      <List>
        {menuList.map((text) => (
          <ListItem key={text} >
            <ListItemButton>
              <Typography variant='h5'>{text}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <Box>
        <TimeLine isVisible={isVisible}/>
        <CssBaseline />
        <Box sx={{position:'fixed',  
              background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(110,150,214,1) 0%, rgba(28,126,190,0.6418942577030813) 15%, rgba(0,212,255,0.6502976190476191) 90%);', 
              width:'100%', 
              height:'90px',
            }}>
              <Grid container direction="row" justifyContent="space-between" alignItems="baseline"> 
                <GridItem xs={4} marginLeft={3} padding={1}>
                  <Avatar alt="Haru" sx={{width:65, height:65}}> <Image priority={true} alt='Haru' width={65} src={myImage}/> </Avatar>   
                </GridItem>
                <GridItem xs={7} width="100%" sx={{display:{xs:'none', sm:'none', md:'none', lg:'block'}}}>
                  <Box marginRight={2}>
                  <Breadcrumbs separator="" display="grid" justifyContent="end">
                    {menuList.map(m => {
                      return  <Link underline="hover" color="inherit" href="/" key={m}>
                                <Typography variant='h4'> {m} </Typography>
                              </Link>
                    }) }
                    </Breadcrumbs>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box display="grid" justifyContent="end" height="100%" onClick={toggleDrawer(true)}>
                    <IconButton sx={{display:{lg:'none', md:'block', sm:'block'}}} size='large' >
                      <DehazeOutlinedIcon fontSize='large'/>
                    </IconButton>
                  </Box>
                </GridItem>
              </Grid>
        </Box>
        <Box height='90px'/>
        <Content triggerScroll={targetRef}/>
        <Drawer open={isDrawOpen} onClose={toggleDrawer(false)} anchor='right' 
          PaperProps={{
            sx: {
              backgroundColor: 'transparent'
            }
          }}>
            {DrawerList}
        </Drawer>

    </Box>
  );
}

