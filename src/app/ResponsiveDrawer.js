'use client'
import React, { useState, useEffect, useRef, forwardRef } from 'react';

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
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const leetcodeRef = useRef(null);
  const experienceRef = useRef(null);
  

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };
  const scrollToLeetCode = () => {
      leetcodeRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollToExperience = () => {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const makeObserver = (setIsVisible) => {
      return new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.28 } // Adjust threshold as needed
      );
    }
    const observer1 = makeObserver(setIsVisible1);
    const observer2 = makeObserver(setIsVisible2);

    if(targetRef1.current) {
      observer1.observe(targetRef1.current);
    }
    if(targetRef2.current) {
      observer2.observe(targetRef2.current);
    }
    return () => {
      if (observer1 && targetRef1.current) {
        observer1.unobserve(targetRef1.current);
      }
      if (observer2 && targetRef2.current) {
        observer2.unobserve(targetRef2.current);
      }
    };
  }, [isVisible1, isVisible2]);

  const [isDrawOpen, setDrawOpen] = React.useState(false);
  const menuList = ['Home', 'Experience', 'LeetCode'];
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
        {menuList.map((text) => {
          let scrollTo = null;
          if(text === 'Home') scrollTo = scrollToTop;
          else if(text === 'Experience') scrollTo = scrollToExperience;
          else scrollTo = scrollToLeetCode;

          return (<ListItem key={text} >
            <ListItemButton onClick={scrollTo}>
              <Typography variant='h5'>{text}</Typography>
            </ListItemButton>
          </ListItem>
        )})}
      </List>
      
    </Box>
  );

  return (
    <Box>
        <TimeLine isVisible1={isVisible1} isVisible2={isVisible2} scrollToTop={scrollToTop} scrollToExperience={scrollToExperience} scrollToLeetCode={scrollToLeetCode} />
        <CssBaseline />
        <Box sx={{position:'fixed',  
              background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(110,150,214,1) 0%, rgba(28,126,190,0.6418942577030813) 15%, rgba(0,212,255,0.6502976190476191) 90%);', 
              width:'100%', 
              height:'90px',
            }}>
              <Grid container='true' direction="row" justifyContent="space-between" alignItems="baseline"> 
                <GridItem xs={4} marginLeft={3} padding={1}>
                  <Avatar alt="Haru" sx={{width:65, height:65}}> <Image priority={true} alt='Haru' width={65} src={myImage}/> </Avatar>   
                </GridItem>
                <GridItem xs={7} width="100%" sx={{display:{xs:'none', sm:'none', md:'none', lg:'block'}}}>
                  <Box marginRight={2}>
                  <Breadcrumbs separator="" display="grid" justifyContent="end">
                    {menuList.map(text => {
                      let scrollTo = null;
                      if(text === 'Home') scrollTo = scrollToTop;
                      else if(text === 'Experience') scrollTo = scrollToExperience;
                      else scrollTo = scrollToLeetCode;

                      return  <Link underline="hover" color="inherit" onClick={scrollTo} key={text} >
                                <Typography variant='h4'> {text} </Typography>
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
        <Grid container='true' alignContent='center'>
          <GridItem xs={1} md={3}>
            <Box></Box>
          </GridItem>
          <GridItem>
            <Content triggerScroll={targetRef1} triggerScroll2={targetRef2} leetcodeRef={leetcodeRef} experienceRef={experienceRef}/>
          </GridItem>
        </Grid>
        
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

