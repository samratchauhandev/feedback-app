// import './App.css';
// import { Box, Container } from '@mui/material';
// import Home from './dashboard/Home';
// import { Route, Routes } from 'react-router-dom';
// import FeedBackForm from './feedback/forms/FeedBackForm';
// import Feedback from './feedback';


// function App() {
//   return (
//     <Container maxWidth='1920px' sx={{
//       backgroundColor: '#F3F3F3', height: '100vh'
//     }}>
//       <Box>
//         <Routes>
//           <Route path="/" element={< Home />} />
//           {/* <Route path="/form" element={< Feedback />} />
//           <Route path="/form" element={< FeedBackForm />} /> */}
//         </Routes>
//       </ Box>
//     </Container>
//   );
// }

// export default App;

import './App.css';
import { Box, Container } from '@mui/material';
import Home from './dashboard/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container maxWidth="1920px" sx={{
      backgroundColor: '#F3F3F3', height: '100vh'
    }}>
      <Box>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;


