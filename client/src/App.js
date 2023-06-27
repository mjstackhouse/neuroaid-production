import './App.css';
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import BlogList from './pages/Blog-List';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <div className='app font-sans'>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/features' element={<Features />}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/blog' element={<BlogList />}/>
          <Route path='/blog/:title' element={<BlogPost />}/>
        </Routes>
    </div>
  );
}

export default App;