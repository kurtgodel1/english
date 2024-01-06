import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MainLayout from './components/layout/MainLayout';

// import './App.css

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/*" element={
        <MainLayout>
          <Container style={{ width: '100%' }}>
            <Box my={4} style={{ width: '100%' }}>
              <Routes>

                {/* More routes */}
              </Routes>
            </Box>
          </Container>
        </MainLayout>
      } />
    </Routes>
  </Router>
  );
}

export default App;