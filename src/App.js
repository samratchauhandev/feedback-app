import './App.css';
import { Box } from '@mui/material';
import Home from './dashboard/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Box sx={{
      backgroundColor: '#F3F3F3', height: '100vh',
      maxWidth: "1920px",
      display: "flex",
      flexDirection: "column",
      margin: 'auto',
      boxShadow: "0px 4px 4px 0px #00000040",
      overflow:'auto'
      
    }}>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;


