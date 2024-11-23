import { Grid, Box, Typography } from "@mui/material"
const Header = () => {
    return <Box sx={{bgcolor:'red', height:'5vh', position:'static'}} >
        <Grid container padding={1} display='flex'>
            <Grid xs={6} display='flex'>
                <Box> Score: </Box>
                <Box> 9999 </Box>
            </Grid>
            <Grid xs={6} display="inline-block" >
                <Box display="flex" justifyContent='end' whiteSpace>
                    <Box >
                        Cash:  
                    </Box>
                    <Box>
                        999
                    </Box>
                </Box>
                
            </Grid>

        </Grid>
    </Box>
}

export default Header;