import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'

const ImageForm = ({ image, handleSubmit, handleChange, cancelPath }) => (
  <div className="singleImage">
    <Card className="col-md-8">
      {image.url ? <Card.Img variant="top" className='cardImage' src={image.url} /> : ''}
      <Card.Body>
        <Form>
          <Form.Group className="form" onSubmit={handleSubmit}>
            <Form.Label>Name</Form.Label>
            <Form.Control
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

            <Button className="formButton" type="submit">Submit</Button>
            <Link to={cancelPath}>
              <Button className="formButton">Cancel</Button>
            </Link>
            { image.url ? '' : <Form.Group id="formGridCheckbox">
              <Form.Check onChange={handleChange} type="checkbox" label="Favorite" name="favorite" value={Boolean(image.favorite)}/>
            </Form.Group>}
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  </div>

)

export default ImageForm
