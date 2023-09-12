import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Navigation from './components/Navigation';
import How from './pages/How';
import Login from './pages/Login';
import FAQ from './pages/FAQ';


import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
  
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/how' element={<How />} />
        <Route path='/login' element={<Login />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
