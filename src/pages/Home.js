import React, { Component } from 'react';


import AboutUs from '../components/About/AboutUs.js';
import MenuCard from '../components/Menu/MenuCard.js';
import Footer from '../components/Footer/Footer.js';
import SimpleSlider from '../components/Slider/SimpleSlider.js';
import FormBook from '../components/BookTable/FormBook.js';
import ImagePanel from '../components/ImageGallery/ImagePanel.js';
import Ourchefs from '../components/Chefs/Ourchefs.js';
import TestimonialsViews from '../components/Testimonials/TestimonialsViews.js';
import EventList from '../components/Events/EventList.js';


class Home extends Component {

render () {

  return (

    <div>
    <SimpleSlider />
    <AboutUs />
    <ImagePanel />
    <MenuCard />
    <TestimonialsViews />
    <Ourchefs />
    <FormBook />
    <EventList />

    <Footer />

    </div>

  )

}
}

export default Home
