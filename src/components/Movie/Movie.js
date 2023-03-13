import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ModalMovie from '../ModalMovie/ModalMovie'
import './Movie.css'

export default function Movie(props) {
  const [showFlag, setShowFlag] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const handleShow = (item) => {
    setClickedMovie(item);
    setShowFlag(true);
  }

  const handleclose = () => {
    setShowFlag(false);
  }
  return (
    <div className='divofcol'>
      <Col className='col' style={{width:'40%'}}>
        <Card>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movielist.poster_path}`} />
          <Card.Body>
            <Card.Title>{props.movielist.title}</Card.Title>
            <Button variant="primary" onClick={() => handleShow(props.movielist)}>See details</Button>
          </Card.Body>
        </Card>
      </Col>
      <ModalMovie showFlag={showFlag} handleclose={handleclose} movieData={clickedMovie}/>
    </div>
  )
}