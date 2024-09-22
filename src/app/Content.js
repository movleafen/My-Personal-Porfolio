'use client'
import React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Typewriter from './Typewriter';
import Blinking from './Blinking';
import Grow from '@mui/material/Grow'
import { Grid, Stack, Chip, Divider } from '@mui/material';



function Content({triggerScroll, triggerScroll2}) {
    var firstMessage = ["My name is Mov Leafen"];
    var secondMessage = ["programmer", "problem solver", "self learner", "Corgi daddy"]
    return <Container disableGutters maxWidth={false} sx={{display:'grid', justifyContent:'center'}}>
            <Stack spacing={5}>
                <Grow in = {true}>
                    <Box ref={triggerScroll}>
                        <Box sx={{height:'10vh'}} width="80vhs"></Box>
                        <Typography sx={{ typography: {lg: 'h3', xs:'h4'}}}> Hello World</Typography>
                        <Typography sx={{ display:'inline-block', typography: {lg: 'h3', xs:'h4'}}}>
                            <Typewriter text={firstMessage} delay={100} isMulti={false}></Typewriter>
                            <br/>
                            I am a <Typewriter text={secondMessage} delay={200} isMulti={true}> </Typewriter>
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
                <Grid key='2a1' id='experience box' container justifyContent='space-evenly' maxWidth='90vh'>
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
                <Grid key='2a1' id='experience box' container justifyContent='space-evenly' maxWidth='90vh'>
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

                <Grid key='2a1' id='experience box' container={true} spacing={2} justifyContent='space-evenly'>
                    <Grid xs={4} justifySelf padding={0.5}>
                        2021 — PRESENT
                    </Grid>
                    <Grid xs={8}>
                        <Typography variant='h5'>
                            Freelance
                        </Typography>
                        <Typography variant='h5'>
                            SDDSSS
                        </Typography>
                        
                    </Grid>
                    
                </Grid>
                <Box key='2a2' id='experience box' maxWidth='80vh' >
                    
                    <Typography maxWidth='80vh' >


                    </Typography>
                </Box>
                <Box key='3a3' id='para2' ref={triggerScroll2}>
                    
                    <Typography maxWidth='80vh' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed fringilla ipsum. Vestibulum sed rutrum sem. Curabitur sollicitudin nisl id diam varius facilisis. Mauris faucibus nulla nec quam sollicitudin egestas. Nunc vel commodo nisl. Aenean purus magna, hendrerit nec nulla tincidunt, sollicitudin hendrerit est. Vivamus laoreet elit nulla, et ultricies ante scelerisque at. Donec diam erat, sodales sit amet urna nec, pharetra dictum neque. Pellentesque a massa faucibus, vestibulum orci ac, commodo nisi. Nullam commodo, ex nec ultrices efficitur, risus lacus sodales risus, vitae luctus urna augue ac quam.

                            Nulla non ligula mauris. Aliquam erat volutpat. Curabitur bibendum lorem quis sodales rutrum. Nam ut nulla non libero accumsan interdum vel vitae mauris. Quisque pretium arcu ut quam facilisis mollis. Nam ultricies nisi nec orci tristique, at tincidunt nunc facilisis. Mauris non mauris mauris. Morbi eget libero nec neque sagittis efficitur sit amet ut ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec egestas eros nisl, in feugiat massa interdum et. Praesent sit amet dignissim arcu. Quisque non congue libero.

                            Sed ornare ante risus, vitae porta metus convallis sit amet. Sed egestas consectetur metus, a tristique enim maximus quis. Fusce at ante pharetra, euismod nulla ut, ultrices lacus. In hac habitasse platea dictumst. Duis nec scelerisque massa, ac aliquet dui. Maecenas at congue est. Sed eu vehicula magna.

                            Mauris bibendum tempor arcu, sed sollicitudin ante consequat id. Suspendisse potenti. Duis quis maximus metus. Morbi sapien purus, feugiat eu eleifend vel, dictum et nulla. Fusce ut rutrum lacus. Sed rhoncus ut odio vel viverra. Morbi fermentum dictum lorem ac rhoncus. Donec mollis libero imperdiet, bibendum tellus vitae, eleifend risus. Maecenas sit amet commodo lacus. Morbi et rhoncus leo. Mauris scelerisque vulputate mi, non egestas sapien. Mauris vitae sapien eu metus sodales molestie. Aenean eget mauris eros. Nullam eu erat eu diam sollicitudin placerat.

                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec condimentum tincidunt nisi, in elementum odio vehicula sed. Sed a mi tristique, molestie elit at, imperdiet orci. Sed cursus faucibus enim, consectetur pretium ex hendrerit auctor. Aenean mattis pretium est, non egestas est cursus non. Ut rhoncus erat nisl, ut egestas augue bibendum ut. Mauris dui mi, volutpat eu facilisis in, convallis eu ante. Nullam sem ante, lobortis ut velit sed, faucibus malesuada nibh. Praesent luctus eu neque eget mattis. Aenean ac odio augue. Morbi gravida condimentum porta.
                    </Typography>

                </Box>
                
            </Stack>
        </Container>
    
}

export default Content;