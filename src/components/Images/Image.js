import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import apiUrl from '../../apiConfig'

const Image = (props) => {
  const [image, setImage] = useState(null)
  const [deleted, setDeleted] = useState(false)

  const destroy = () => {
    axios({
      url: `${apiUrl}/images/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  useEffect(() => {
    axios({ url: `${apiUrl}/images/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      } })
      .then(res => setImage(res.data.image))
      .catch(console.error)
  }, [])

  if (!image) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Image succesfully deleted!' } }
    } />
  }

  return (
    <div className="singleImage">
      <Card className="card col-md-8">
        <Card.Img variant="top" className= 'cardImage' src={image.url} />
        <Card.Body className="cardBody">
          <Card.Title>{image.name}</Card.Title>
          <Button className="formButton" variant="primary" onClick={destroy}>Delete Image</Button>
          <Link to={`${props.match.params.id}/edit`}>
            <Button className="formButton" variant="primary">Edit</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>

  )
}

export default Image
