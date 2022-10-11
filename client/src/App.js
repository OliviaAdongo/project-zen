import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Focused from './components/Focused';
import Mantra from './components/Mantra';
import Meditation from './components/Meditation';
import Mindfulness from './components/Mindfulness';
import Movement from './components/Movement';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
          <Routes>

          <Route path="/" element={<Meditation/>}/>
          <Route path="/mind" element={<Mindfulness/>}/>
          <Route path="/focus" element={<Focused/> }/>
          <Route path="/movement" element={<Movement/> }/>
          <Route path="/mantra" element={<Mantra/> }/>

          </Routes>
    </Router>
  );
}

export default App;
