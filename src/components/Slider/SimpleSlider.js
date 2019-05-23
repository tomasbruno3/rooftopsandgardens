import React, { Component } from 'react';
import Slider from 'react-slick';

class SimpleSlider extends Component {


render () {

  var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (

    <div>
    <div id="home-revslider" className="slider-section slider-section2 container-fluid no-padding">

      <div className="rev_slider_wrapper">
        <div id="home-slider2" className="rev_slider" data-version="5.3">

          
            <img src="assets/images/Slider2.jpg" alt="slider"/>


        </div>
      </div>
    </div>
    </div>
  )
}
}

export default SimpleSlider
