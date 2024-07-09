import './App.css';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/landing/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
