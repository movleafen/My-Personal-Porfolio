'use client'
import { Typography, Container, Box, Stack, Grid } from "@mui/material";

function TimeLine({isVisible}) {
    return <Box position='fixed' 
            sx={{
                display:{xs:'none', sm:'none', md:'none', lg:'block'},
                height:'50vh',
                marginTop:14,
                padding:5,
                width: '65vh',
            }}>
        <Stack spacing={3}>
            <Grid container spacing={2} key='1'>
                <Grid item size={2}>
                    <Box key='1'
                        sx={{background:'black',
                            height:'2vh',
                            width: isVisible ? '30vh' : '20vh',
                            transition:' width 1s',
                            borderRadius:`border-radius: 27px 27px 27px 27px;
                                        -moz-border-radius: 27px 27px 27px 27px;
                                        -webkit-border-radius: 27px 27px 27px 27px;
                                        border: 0px solid #000000;`

                    }}>.</Box>
                    {console.log(isVisible)}
                </Grid>
                <Grid item size={1}>
                    <Box>
                        Hello
                    </Box>
                </Grid>
                
            </Grid>

            <Grid container spacing={2} key='2'>
                <Grid item size={2}>
                    <Box key='1'
                        sx={{background:'black',
                            height:'2vh',
                            width:'10vh',
                            borderRadius:`border-radius: 27px 27px 27px 27px;
                                        -moz-border-radius: 27px 27px 27px 27px;
                                        -webkit-border-radius: 27px 27px 27px 27px;
                                        border: 0px solid #000000;`

                    }}>.</Box>
                </Grid>
                <Grid item size={1}>
                    <Box>
                        Hello
                    </Box>
                </Grid>
                
                
            </Grid>
            
            
            
        </Stack>
    </Box>
}
export default TimeLine;