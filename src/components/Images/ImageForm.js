import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'

const ImageForm = ({ image, handleSubmit, handleChange, cancelPath }) => (
  <div className="singleImage">
    <Card className="col-md-8">
      {image.url ? <Card.Img variant="top" className='cardImage' src={image.url} /> : ''}
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            placeholder="A Wonderful Film"
            value={image.name}
            name="name"
            onChange={handleChange}
          />

          <Form.Control style={{ marginLeft: '100px', fontFamily: 'Muli', fontSize: '16px', color: '#6c6258' }}
            type="file"
            placeholder="Upload"
            name="upload"
            onChange={handleChange}
            value={image.file}
          />

          <Button type="submit">Submit</Button>
          <Link to={cancelPath}>
            <button>Cancel</button>
          </Link>
        </Form>
        { image.url ? '' : <Form.Group id="formGridCheckbox">
          <Form.Check onChange={handleChange} type="checkbox" label="favorite" name="favorite" value={Boolean(image.favorite)}/>
        </Form.Group>}
      </Card.Body>
    </Card>
  </div>

)

export default ImageForm
