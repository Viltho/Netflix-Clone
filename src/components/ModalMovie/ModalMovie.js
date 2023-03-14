import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

export default function ModalMovie(props) {
  const [isAddingToFavourites, setIsAddingToFavourites] = useState(false);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleAddToFavourites() {
    setIsAddingToFavourites(true);

    const dataToSend = {
      title: props.movieData.title,
      poster_path: props.movieData.poster_path,
      release_date: props.movieData.release_date,
      overview: props.movieData.overview,
      comment: comment
    }

    fetch('https://movies-library.up.railway.app/addFavourite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => {
        setIsAddingToFavourites(false);
        if (response.ok) {
          setSuccessMessage('Added to favourites!');
          setComment('')
          setErrorMessage('');
        } else {
          throw new Error('Failed to add to favourites');
        }
      })
      .catch(error => {
        setIsAddingToFavourites(false);
        setErrorMessage(error.message);
      });
  }

  return (
    <div>
      <Modal className='divofmodal' show={props.showFlag} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movieData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={`https://image.tmdb.org/t/p/w500${props.movieData.poster_path}`} width='100%'></Image>
          <p>{props.movieData.release_date}</p>
          <p>{props.movieData.overview}</p>
          <textarea onChange={handleCommentChange} placeholder="Add a comment"></textarea>
        </Modal.Body>
        <Modal.Footer>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <Button variant="secondary" onClick={props.handleclose}>
            Close
          </Button>
          <Button onClick={handleAddToFavourites} variant="primary" disabled={isAddingToFavourites}>
            {isAddingToFavourites ? 'Adding...' : 'Add to favourites'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
