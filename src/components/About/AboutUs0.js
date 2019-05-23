import React, { Component } from 'react';


class AboutUsMore extends Component {

render () {

  return (

  <div>
    <div className="clearfix"></div>

      <div className="container-fluid no-left-padding no-right-padding about-section about-section2">

      <div className="container">

        <div className="row">

          <div className="col-md-7 about-detail text-center">

              <div className="section-header section-header2 text-center">
                <h3>The Story</h3>
                <h4>Where did all began?</h4>
              </div>
                  <p>Huge herds of wild cattle roamed much of the pampa region of Argentina until the mid-nineteenth century. Inhabitants of the Río de la Plata, especially the equestrian gaucho, developed a fondness for beef, especially asado, which is roasted beef (or lamb or goat).</p>
                  <p>The meat, often a side of ribs, is skewered on a metal frame called an asador and is roasted by placing it next to a slow-burning fire. Gauchos favored cooking asado with the wood of the quebracho tree because it smokes very little. Asado, accompanied by maté tea, formed the basis of the gaucho diet.</p>
                  <a href="/book" title="Read More">Book a Table</a>
              </div>
          </div>
        </div>
      <div class="about-img"><img src="assets/images/AboutUsImage.jpg" alt="About" /></div>
    </div>


  </div>




  )
}
}

export default AboutUsMore;
