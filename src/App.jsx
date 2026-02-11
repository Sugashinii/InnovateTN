import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clinics from './pages/Clinics';
import Symptoms from './pages/Symptoms';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clinics" element={<Clinics />} />
           <Route path="/symptoms" element={<Symptoms />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
