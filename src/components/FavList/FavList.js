import React, { useEffect, useState } from 'react';
import FavMovie from './FavMovie/FavMovie';
import { Row } from 'react-bootstrap';
import './FavList.css';

export default function FavList(props) {
  const [moviesArr, setMoviesArr] = useState([]);
  // const [favArr, seFavArr] = useState([]);

  const sendReq = async () => {
    const serverURL = `https://movies-library.up.railway.app/favMovie`;
    const response = await fetch(serverURL);
    const data = await response.json();
    setMoviesArr(data);
  }
  const takeNewArr = (arr) => {
    setMoviesArr(arr);
  }

  useEffect(() => {
    sendReq();
  }, [])
  
  return (
    <div>
      <Row xs={1} md={6} className="g-4">
        {moviesArr.map((e) => {
          return (
            <div key ={e.id}>
              <FavMovie movielist={e} takeNewArr={takeNewArr}/>
            </div>
          )
        })}
      </Row>
    </div>
  )
}