import React, { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import './Home.css'

export default function Home() {
  const [moviesArr, setMoviesArr] = useState([]);

  const sendReq = async () => {
    const serverURL = `https://movies-library.up.railway.app/trending`;
    const response = await fetch(serverURL);
    const data = await response.json();
    setMoviesArr(data);
  }
  useEffect(() => {
    sendReq();
  }, [])
  return (
    <main>
      <div className='homeofmovies'>
        <MovieList movies={moviesArr} />
      </div>
    </main>
  )
}