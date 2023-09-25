import './App.css';
import React from 'react';
import  MyNavbar  from './components/navbar/navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/home/home';
import About from './components/about/about';
import Education from './components/education/education';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
