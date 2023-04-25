import React, { useRef, useState } from "react";
import { Image } from "@chakra-ui/react";
import { ArrowContainer, ImageWrapper, Wrapper, Arrow } from "./components";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const xDiff = useRef(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    xDiff.current = startX - e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (xDiff.current > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setStartX(0);

  }


  return (
    <Wrapper
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ImageWrapper>
        <Image w="full" h="full" src={images[currentIndex]} alt="carousel image" />
      </ImageWrapper>
      <ArrowContainer>
        {!(images.length - 1 === currentIndex) && (
          <Arrow direction="left" onClick={handlePrev}>
            &#10094;
          </Arrow>
        )}
        <Arrow direction="right" onClick={handleNext}>
          &#10095;
        </Arrow>
      </ArrowContainer>
    </Wrapper>
  );
};

export default ImageCarousel;