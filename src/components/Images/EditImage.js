import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ImageForm from './ImageForm.js'

const EditImage = (props) => {
  const [image, setImage] = useState(null)
  const [update, setUpdate] = useState(false)

  const handleChange = (event) => {
    event.persist()

    setImage(image => ({ ...image, [event.target.name]: event.target.value }))
  }

  useEffect(() => {
    axios({ url: `${apiUrl}/images/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      } })
      .then(res => {
        setImage(res.data.image)
      })
      .catch(console.error)
  }, [])

  const handleSubmit = event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.append('bookmark', image.favorite)
    const imageJSON = JSON.stringify(image)
    formData.append('image', imageJSON)
    axios({
      url: `${apiUrl}/images/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: formData
    })
      .then(res => {
        setUpdate(true)
      })
      .catch(console.error)
  }

  if (update) {
    return <Redirect to={`/images/${props.match.params.id}`} />
  }

  if (!image) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <ImageForm
        image={image}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </div>
  )
}

export default EditImage
