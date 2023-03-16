import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Movie from './components/Movie/Movie'
import NavbarNew from './components/Navbar/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavList from './components/FavList/FavList';
import FavModal from './components/FavList/FavModal/FavModal';

function App() {
  return (
    <div className='App'>
      <NavbarNew className='navbarnew'/>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/FavList' element={<FavList />} />
          <Route path='/FavList/:d' element={<FavModal />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
