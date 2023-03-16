import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default function FavModal(props) {
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const dataToSend = {
        comment: event.target.comment.value
      }
      const servUrl = `https://movies-library.up.railway.app/favMovie/${props.movieData.id}`;
      const axiosRes = await axios.put(servUrl, dataToSend);
      props.takeNewArr(axiosRes.data);
      setSuccessMessage("Comment Updated");
    }
    catch (error) {
      setErrorMessage("Comment update Failed");
    }
  }

  const handDelete = async (event) => {
    event.preventDefault();
    const servUrl = `https://movies-library.up.railway.app/favMovie/${props.movieData.id}`;
    const axiosRes = await axios.delete(servUrl);
    props.takeNewArr(axiosRes.data);
  }

  return (
    <div>
      <Modal className='divofmodal' show={props.showFlag} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movieData.title}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Edit Comment</Form.Label>
            <Form.Control name="comment" type="text" defaultValue={props.movieData.comment} onChange={handleCommentChange} />
          </Form.Group>
          <Button variant="success" type="submit">
            Save changes
          </Button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <Button variant="danger" type="button" onClick={handDelete}>
            Remove from Favorites
          </Button>
        </Form>
      </Modal>
    </div>
  )
}
