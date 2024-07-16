import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { MaterialDesignContent } from 'notistack'
import { styled } from '@mui/material';
import Course from './pages/course/Course';
import Checkout from './pages/checkout/Checkout';
import Homepage from './pages/homepage/Homepage';
import Batches from './pages/batches/Batches';
import Courses from './pages/courses/Courses';
import Modules from './pages/modules/Modules';
import Batch from './pages/batch/Batch';

function App() 
{

  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent-success': {
      color: '#AF8F6F',
      backgroundColor:'black',
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
          <Route path='/' element={<Homepage/>}/>
          <Route path='/batches' element={<Batches/>}/>
          <Route path='/batches/:id' element={<Batch/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/course/:id' element={<Course/>}/>
          <Route path='/modules/:id' element={<Modules/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
