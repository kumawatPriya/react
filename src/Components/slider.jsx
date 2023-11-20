import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import image from "../images/image4.jpg";
import { Image } from "../Image";
import image1 from "../images/natural-elements-spa-with-beauty-cream (1).jpg";
import image2 from "../images/image1.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';


function Slider(){
    return(
        <>
 <Carousel className="slider-main">
      <Carousel.Item className="slide1">
        <Image picture={image}/>
        <Carousel.Caption>
          <h4>PRODUCTS FOR STRONGER, <br /> HEALTHIER AND GORGEOUS HAIR</h4>
          <h5>Attend the Hiar-Care Workshop <br /> Keep Your Hair <br /> GRADIANT & SHINEY</h5>
          <p className="slide1-para">40% off on All Hair care products....</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slide1">
      <Image picture={image1}/>
        <Carousel.Caption>
        <h4>PRODUCTS FOR STRONGER, <br /> HEALTHIER AND GORGEOUS HAIR</h4>
          <h5>Attend the Hiar-Care Workshop <br /> Keep Your Hair <br /> GRADIANT & SHINEY</h5>
          <p className="slide1-para">40% off on All Hair care products....</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slide1">
      <Image picture={image2}/>
        <Carousel.Caption>
          
        <h4>PRODUCTS FOR STRONGER, <br /> HEALTHIER AND GORGEOUS HAIR</h4>
          <h5>Attend the Hiar-Care Workshop <br /> Keep Your Hair <br /> GRADIANT & SHINEY</h5>
          <p className="slide1-para">40% off on All Hair care products....</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}

export { Slider }