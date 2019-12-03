import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ImageForm from './ImageForm.js'

const ImageCreate = (props) => {
  const [image, setImage] = useState({
    name: '',
    file: null,
    favorite: false
  })
  const [createImageId, setImageId] = useState(null)

  const handleChange = (event) => {
    event.persist()
    let value = event.target.value
    if (event.target.name === 'favorite') {
      value = event.target.checked
    }

    setImage(image => ({ ...image, [event.target.name]: value }))
    console.log(image)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.append('favorite', image.favorite)
    console.log(formData)
    axios({
      url: `${apiUrl}/images`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: formData
    })
      .then(res => {
        console.log(res)
        setImageId(res.data.image._id)
      })
      .catch(console.error)
  }

  if (createImageId) {
    return <Redirect to={`/images/${createImageId}`} />
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

export default ImageCreate
