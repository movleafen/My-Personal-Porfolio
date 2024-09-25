'use client'
import React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Typewriter from './Typewriter';
import Blinking from './Blinking';
import Grow from '@mui/material/Grow'
import { Grid, Stack, Chip, Divider } from '@mui/material';
import LeetCodeStats from './Leetcode';

function Content({triggerScroll, triggerScroll2, leetcodeRef, experienceRef}) {
    var firstMessage = ["My name is Mov Leafen"];
    var secondMessage = ["programmer", "problem solver", "self learner", "Corgi daddy"];
    
    return <Container disableGutters maxWidth={false} sx={{display:'grid', justifyContent:'center'}}>
            <Stack spacing={5}>
                <Grow in = {true}>
                    <Box ref={triggerScroll}>
                        <Box sx={{height:'10vh'}} width="80vhs"></Box>
                        <Typography sx={{ typography: {lg: 'h3', xs:'h4'}}}> Hello World</Typography>
                        <Typography sx={{ typography: {lg: 'h3', xs:'h4'}}}>
                            <Typewriter text={firstMessage} delay={100} isMulti={false}></Typewriter>
                            <br/>
                            I am a <Typewriter text={secondMessage} delay={50} isMulti={true}> </Typewriter>
                            <Blinking delay={600}/>
                        </Typography>
                        
                        <Typography sx={{maxWidth:'80vh'}}>
                            <br/>
                            I am a fullstack software engineer with over 3 years of experience in .Net technology, mainly with C#, Asp.Net MVC/API Core, mssql. 
                            I am also well-versed with Oracle Sql and Oracle tools such as sqlloader, toad, oracle 13c, and oracle oem.  
                            I also have a strong fundamental skill for Javascript.
                        </Typography>
                    </Box>
                    
                </Grow>
                <Divider/>
                <Grid key='0' id='experience box' container justifyContent='space-evenly' maxWidth='90vh' ref={experienceRef}>
                    <Grid xs={3} justifySelf padding={0.5}>
                        2017
                    </Grid>
                    <Grid xs={8}>
                        <Typography variant='h5' justifyContent='space-evenly' >
                            SlickDeals - Intern
                        </Typography>
                        <Typography> Built 5 pipelines on Apachi Airflow</Typography>
                        <Typography> Developed custom styles and themes on vBullet 3</Typography>
                        <Typography> Make good coffee </Typography>
                    </Grid>
                    <Stack direction='row' useFlexGap spacing={1} sx={{flexWrap: 'wrap', padding:1 }}> 
                        <Chip label='Java'/> 
                        <Chip label='JS'/> 
                        <Chip label='PHP'/>
                        <Chip label='BASH'/> 
                    </Stack>
                   
                </Grid>
                <Divider/>
                <Grid key='1' id='experience box' container justifyContent='space-evenly' maxWidth='90vh'>
                    <Grid xs={3} justifySelf padding={0.5}>
                        2019 — 2021
                    </Grid>
                    <Grid xs={8}>
                        <Typography variant='h5' justifyContent='space-evenly' >
                            UNLV - Intern to Software Engineer
                        </Typography>
                        <Typography> Developed an optimal solution for a Big Data project that mine 100gb daily from Canvas Cloud. </Typography>
                        <Typography> Created over 30 automations in UNIX environment via OEM 13c/Kubernetes </Typography>
                        <Typography> Wrote over 20 Microservices with Java and Shell scrips such as: </Typography>
                            <ul>
                                <li> A script to remote sync for multiple storages between servers or docker volumes</li>
                                <li> An AES-256 encryption jar to obscure bash jobs paramenters </li>
                                <li> a Java program to generate metadata for students geolocation</li>
                            </ul>
                        <Typography> Recreated UNLV SEND Application from VB to Razor Core (fullstack)</Typography>
                    </Grid>
                    <Stack direction='row' useFlexGap spacing={1} sx={{flexWrap: 'wrap', padding:1 }}> 
                        <Chip label='Unix'/> 
                        <Chip label='Java'/>
                        <Chip label='JS'/> 
                        <Chip label='C#'/>
                        <Chip label='.Net'/> 
                        <Chip label='Oracle'/>
                        <Chip label='Docker'/> 
                        <Chip label='Oracle SQL'/>
                        <Chip label='MSSQL'/> 
                    </Stack>
                   
                </Grid>
                <Divider/>
                <Grid key='2' id='experience box' container justifyContent='space-evenly' maxWidth='90vh'>
                    <Grid xs={3} justifySelf padding={0.5}>
                        2021
                    </Grid>
                    <Grid xs={8}>
                        <Typography variant='h5' justifyContent='space-evenly' >
                            JCM - Software Engineer
                        </Typography>
                        <Typography> Developed and maintained JCM Fuzion, a system providing cash management
                        data for Slot Machines </Typography>
                        <Typography>  Added new features for mobile usability and connectivity                        </Typography>
                        <Typography> Designed databases and models </Typography>
                        <Typography>  Built new pages for the Fuzion Mobile Section</Typography>
                        <Typography> AddedAPIs for communication between the NFC reader and Fuzion </Typography>
                        <Typography> Modified stored procedures to improve Fuzion performance </Typography>
                        <Typography>  Communicated with customers (such as Hard Rock Casino) and created hotfix
                        patches to resolve issues</Typography>
                        <Typography>  Updated/restored daily database from active users on all test environments </Typography>
                        
                    </Grid>
                    <Stack direction='row' useFlexGap spacing={1} sx={{flexWrap: 'wrap', padding:1 }}> 
                        <Chip label='JS'/> 
                        <Chip label='JQuery'/> 
                        <Chip label='C#'/>
                        <Chip label='.Net'/> 
                        <Chip label='MVC 3.0'/> 
                        <Chip label='ASP.Net'/>
                        <Chip label='Entity Framework'/> 
                        <Chip label='MSSQL'/> 
                    </Stack>
                </Grid>
                <Divider/>
                <Grid key='3' id='experience box' container justifyContent='space-evenly' maxWidth='90vh'>
                    <Grid xs={3} justifySelf padding={0.5}>
                        2021 — PRESENT
                    </Grid>
                    <Grid xs={8}>
                        <Typography variant='h5' justifyContent='space-evenly' >
                            Freelancing Side Projects
                        </Typography>
                        <Typography> Developed NodeJS APIs for Canon EDSDK: </Typography>
                        <ul>
                            <li>Live View and Remote Capture</li>
                            <li>Image transfering from host device to AWS cloud</li>
                            <li>Generate QR Code for URL to retrieve pictures</li>
                        </ul>
                        <Typography> Developed a blog for my dog from React and hosted in AWS </Typography>
                    </Grid>
                    <Stack direction='row' useFlexGap spacing={1} sx={{flexWrap: 'wrap', padding:1 }}> 
                        <Chip label='JS'/> 
                        <Chip label='React'/> 
                        <Chip label='C#'/>
                        <Chip label='.Net'/> 
                        <Chip label='MSSQL'/> 
                        <Chip label='MYSQL'/>
                        <Chip label='AWS'/> 
                    </Stack>
                </Grid>
                <Divider/>
                <Box key='4' id='para2' ref={triggerScroll2}> 
                    <Typography maxWidth='80vh' ref={leetcodeRef}>
                           LEETCODE STATS
                    </Typography>
                    <LeetCodeStats/>
                    
                </Box>
            </Stack>
        </Container>
    
}

export default Content;