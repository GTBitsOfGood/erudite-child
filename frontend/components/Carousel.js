import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Image} from 'semantic-ui-react';

class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><Image src="https://water.org/media/images/Waterorg_Homepage_Footer.original.jpg" /></Slide>
          <Slide index={1}><Image src="https://water.org/media/images/Waterorg_Homepage_Footer.original.jpg" /></Slide>
          <Slide index={2}><Image src="https://water.org/media/images/Waterorg_Homepage_Footer.original.jpg" /></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default Carousel;
