import React from 'react'
import Movie from '../Movie/Movie'
import Row from 'react-bootstrap/Row';

export default function MovieList(props) {

  return (
    <div className='movielist'>
      <Row xs={1} md={6} className="g-4">
        {props.movies.map((e) => {
          return (
            <div>
              <Movie movielist={e} />
            </div>
          )
        })}
      </Row>
    </div>
  )
}