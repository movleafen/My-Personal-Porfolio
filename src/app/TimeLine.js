'use client'
import { Typography, Container, Box, Stack, Grid, ButtonBase } from "@mui/material";
const setborderRadius = `border-radius: 27px 27px 27px 27px;
                                            -moz-border-radius: 27px 27px 27px 27px;
                                            -webkit-border-radius: 27px 27px 27px 27px;
                                            border: 0px solid #000000;`;

const makeTab = (isVisible, str) => {
    return <ButtonBase key={str} sx={{borderRadius:setborderRadius, width:'40vh'}}>
        <Grid container='true' spacing={2} height='10vh' alignContent='space-around' >
                <Grid item size={2}>
                    <Box
                        sx={{background:'black',
                            height:'1vh',
                            width: isVisible ? '15vh' : '5vh',
                            transition:' width 0.5s',
                            borderRadius:setborderRadius

                    }}></Box>
                </Grid>
                <Grid item size={1}>
                    <Box>
                        <Typography>
                            {str}
                        </Typography>
                    </Box>
                </Grid>
        </Grid>
    </ButtonBase>
}

function TimeLine({isVisible1, isVisible2}) {
    return <Box position='fixed' container='true'
            sx={{
                display:{xs:'none', sm:'none', md:'none', lg:'block'},
                height:'10vh',
                marginTop:14,
                padding:3,
                width: '40vh',
            }}>
        <Stack spacing={3}>
        {makeTab(isVisible1, 'About Me')}
        {makeTab(!isVisible1 && !isVisible2, 'Experience')}
        {makeTab(isVisible2, 'Leet Code')}
        
            
        </Stack>
    </Box>
}
export default TimeLine;