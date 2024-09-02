import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './components/Header';

function RoutesPage(){
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projects />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Contato" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default RoutesPage