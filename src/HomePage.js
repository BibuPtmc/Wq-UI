import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Slide 1</h3>
            <p>Description de la première image.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Slide 2</h3>
            <p>Description de la deuxième image.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Slide 3</h3>
            <p>Description de la troisième image.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
