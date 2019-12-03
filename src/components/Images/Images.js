import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import { Card } from 'react-bootstrap'

const Images = (props) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios({ url: `${apiUrl}/images`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      } })
      .then(res => setImages(res.data.images))
      .catch(console.error)
  }, [])

  const imagesList = images.map(image => (
    <div className="col-md-3 cardItem" key={image._id}>
      <Card>
        <Card.Img variant="top" src={image.url} />
        <Link to={`/images/${image._id}`} className="btn-group">
          <a className="btn btn-default btn-block" variant="primary">{image.name}</a>
        </Link>
      </Card>
    </div>
  ))

  return (
    <div className="mainImages">
      <div className="col-md-9">
        <div className='row'>
          {imagesList}
        </div>
      </div>
    </div>
  )
}

export default Images
