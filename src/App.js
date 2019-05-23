import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import RevSlider, { Slide, Caption } from 'react-rev-slider';


import Navbar from './components/Navbar/Navbar.js';
import Ourchefs from './components/Chefs/Ourchefs.js';
import AboutUs from './components/About/AboutUs.js';
import ImagePanel from './components/ImageGallery/ImagePanel.js';
import MenuCard from './components/Menu/MenuCard.js';
import TestimonialsViews from './components/Testimonials/TestimonialsViews.js';
import FormBook from './components/BookTable/FormBook.js';
import EventList from './components/Events/EventList.js';
import Footer from './components/Footer/Footer.js';
import SimpleSlider from './components/Slider/SimpleSlider.js';
import Modal from './components/Shop/Modal.js'
import Home from './pages/Home.js';
import Story from './pages/Story.js';
import Book from './pages/Book.js';

import Shop from './pages/Shop.js';
import Cart from './pages/Cart.js';
import Details from './components/Shop/Details.js';
import SignUpPage from './pages/SignUpPage.js';
import SignInPage from './pages/SignInPage.js';
import Contact from './pages/Contact.js';
import User from './pages/User.js';


function App() {
  return (

  <div className = "App">
  <BrowserRouter>

  <Navbar />
  <Switch>
  <Route exact path = '/' component = {Home} />
  <Route exact path = '/index.html' component = {Home} />
  <Route exact path = '/home' component = {Home} />
  <Route exact path = '/story' component = {Story} />

  <Route exact path = '/book' component = {Book} />
  <Route exact path = '/shop' component = {Shop} />
  <Route exact path = '/details' component = {Details} />
  <Route exact path = '/contact' component = {Contact} />
  <Route exact path = '/cart' component = {Cart} />
  <Route path='/signin' component={SignInPage} />
  <Route path='/signup' component={SignUpPage} />
  <Route path='/user' component={User} />
  </Switch >
  <Modal />


  </BrowserRouter>
  </div>

  );
}

export default App;
