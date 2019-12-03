import React from 'react'
import { Carousel } from 'react-bootstrap'

const HomePage = () => (
  <div>
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item mini">
        <img
          className="d-block w-100"
          src={require('./bulbasaur.jpeg')}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item dice">
        <img className="d-block w-100" src={require('./dice.jpeg')} alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item className="carousel-item bulba">
        <img
          className="d-block w-100"
          src={require('./miniature.jpeg')}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default HomePage
