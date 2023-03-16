import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import FavModal from '../FavModal/FavModal'
import './FavMovie.css';

export default function FavMovie(props) {
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
            <Col className='col' style={{ width: '40%' }}>
                <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movielist.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{props.movielist.title}</Card.Title>
                        <Card.Text>{props.movielist.comment}</Card.Text>
                        <Button variant="primary" onClick={() => handleShow(props.movielist)}>Edit Your Favorite Movie Comment</Button>
                    </Card.Body>
                </Card>
            </Col>
            <FavModal showFlag={showFlag} handleclose={handleclose} movieData={clickedMovie} takeNewArr={props.takeNewArr}/>
        </div>
    )
}
