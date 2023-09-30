import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import './ControlledCarousel.css'; // Import your custom CSS file

function ControlledCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <Carousel
      className="my-carousel"
      fade
      activeIndex={currentIndex}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 zoom-image"
          src="/asset/n.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 zoom-image"
          src="/asset/n.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 zoom-image"
          src="/asset/n.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
