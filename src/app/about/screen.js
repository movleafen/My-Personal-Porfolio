import { Grid, Container, Typography, Box } from "@mui/material"
import Header from "./header";
import Body from "./body";
const Screen = () => {

    return <Container  maxWidth="md" sx={{flexGrow: 1}}> 
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh'}}>
            <Header/>
            <Body/>
             
        </Box>
    </Container>
}

export default Screen;