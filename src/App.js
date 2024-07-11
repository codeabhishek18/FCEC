import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing/Landing';
import { SnackbarProvider } from 'notistack'
import { MaterialDesignContent } from 'notistack'
import { styled } from '@mui/material';

function App() 
{

  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent-success': {
      color: 'black',
      backgroundColor:'#FCF5ED',
      border:'1px solid #AF8F6F'
    },
    '&.notistack-MuiContent-error': {
      backgroundColor: '#970C0C',
    },
  }));
  
  return (
    <div className="App">
      <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}  Components={{
      success: StyledMaterialDesignContent,
      error: StyledMaterialDesignContent,
    }}>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
