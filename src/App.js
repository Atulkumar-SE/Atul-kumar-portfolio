import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './Router/About';
import Contact from './Router/Contact';
import Home from './Router/Home';
import Project from './Router/Project';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/About' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
