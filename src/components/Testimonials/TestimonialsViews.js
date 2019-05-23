import React, { Component } from 'react';
import Slider from 'react-slick';

class TestimonialsViews extends Component {

render () {

  var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (

    <div>
    <div className="clearfix"></div>


    <div className="container-fluid no-left-padding no-right-padding testimonial-section">

      <div className="container">

      <div className="section-header text-center">
        <h3>Our Customer Says</h3>
        <h4>TESTIMONIALS</h4>
      </div>
      <div className="row">
        <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 col-xs-offset-1 col-xs-10 text-center">
          <div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
          <Slider {...settings}>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <p>These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.</p>

                <h5>- Jhone Dheve</h5>
              </div>
            </div>

            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <p>These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.</p>

                <h5>- Jhone Dheve</h5>
              </div>
            </div>

            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <p>These days are all Happy and Free. These days are all share them with me oh baby. Come and listen to a story about a man named Jed - a poor mountaineer barely kept his family fed. Here's the story of a lovely lady who was bringing up three very lovely girls.</p>

                <h5>- Jhone Dheve</h5>
              </div>
            </div>

        </Slider>




          </div>
        </div>
      </div>
    </div>
  </div>
  </div>




  )

}
}


export default TestimonialsViews;
