'use client'
import { Container} from '@mui/material';
import ResponsiveDrawer from "./ResponsiveDrawer";

export default function Home() {
  return (
      <Container disableGutters maxWidth={false}>        
        <ResponsiveDrawer/>
      </Container>
  );
}
