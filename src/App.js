import React from 'react';
import Home from './components/Home/Home';
import NavbarNew from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import FavList from './components/FavList/FavList'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavbarNew />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favlist' element={<FavList />}/>
      </Routes>
    </div>
  );
}

export default App;
