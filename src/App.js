import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './homepage';
import Aboutpage from './about';
import Servicespage from './services';
import Workpage from './work';
import Blogpage from './blog';
import Contact from './contact';

const App = () =>{
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/service" element={<Servicespage/>}/>
          <Route path="/work" element={<Workpage/>}/>
          <Route path="/blog" element={<Blogpage/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
