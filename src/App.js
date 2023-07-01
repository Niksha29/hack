import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Login from './Login/Login';
import Sign from './Signup/Sign';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Services from './Pages/Services';
import Contactus from './Pages/Contactus';
import Main from './Main/main';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Main />
    </Router>
  );
}

export default App;
