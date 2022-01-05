import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Projects from'./pages/Projects';
import Contact from'./pages/Contact';
import Footer from './components/Footer/Footer';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
