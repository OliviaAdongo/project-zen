import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Mantra from './components/Mantra';
import Meditation from './components/Meditation';
import Mindfulness from './components/Mindfulness';
import Movement from './components/Movement';
import Navbar from './components/Navbar/Navbar';
// import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
    
      <Navbar/>
     <Login/>
          <Routes>

          <Route path="/" element={<Meditation/>}/>
          <Route path="/mind" element={<Mindfulness/>}/>
          <Route path="/movement" element={<Movement/> }/>
          <Route path="/mantra" element={<Mantra/> }/>

          </Routes>
    </Router>
  );
}

export default App;
