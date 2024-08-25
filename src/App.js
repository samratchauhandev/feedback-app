import './App.css';
import { Box, Container } from '@mui/material';
import Main from './dashboard/Main';


function App() {
  return (
    <Container maxWidth='1920px' sx={{
      backgroundColor: '#F3F3F3'
    }}>
      <Box>
        < Main />
      </ Box>
    </Container>
  );
}

export default App;
