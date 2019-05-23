import React, { Component } from 'react';

import EventList from '../components/Events/EventList.js';
import Footer from '../components/Footer/Footer.js';


class Events extends Component {

render () {

  return (

    <div>
    <EventList />
    <EventList />
    <Footer />
    </div>

  )

}
}

export default Events;
