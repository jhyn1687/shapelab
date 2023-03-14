import "./css/App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Members from "./pages/Members";
import Publications from "./pages/Publications";
import Resources from "./pages/Resources";
import Positions from "./pages/Positions";
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router basename="/shapelab">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/members/*" element={<Members />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources/*" element={<Resources />} />
            <Route path="/positions/" element={<Positions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
