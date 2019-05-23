import React, { Component } from 'react';

class Images extends Component {

render () {

  const typeOfImage = this.props.typeOfImage || 'All'
  const containerClass = 'gallery-box col-md-3 col-sm-4 col-xs-4' + typeOfImage +' "" '
  return (

        <Images className={containerClass}>
          <a href="assets/images/gallery1.jpg"><img src="assets/images/gallery1.jpg" alt="Gallery" /></a>
        </Images

        <Images className={containerClass}>
          <a href="assets/images/gallery2.jpg"><img src="assets/images/gallery2.jpg" alt="Gallery" /></a>
        </Images
        <div className="gallery-box col-md-3 col-sm-4 col-xs-4 lunch">
          <a href="assets/images/gallery3.jpg"><img src="assets/images/gallery3.jpg" alt="Gallery" /></a>
        </div>
        <div className="gallery-box col-md-3 col-sm-4 col-xs-4 dinner">
          <a href="assets/images/gallery4.jpg"><img src="assets/images/gallery4.jpg" alt="Gallery" /></a>
        </div>
        <div className="gallery-box col-md-3 col-sm-4 col-xs-4 nonveg">
          <a href="assets/images/gallery5.jpg"><img src="assets/images/gallery5.jpg" alt="Gallery" /></a>
        </div>
        <div className="gallery-box col-md-3 col-sm-4 col-xs-4 breakfast">
          <a href="assets/images/gallery6.jpg"><img src="assets/images/gallery6.jpg" alt="Gallery" /></a>
        </div>
        <div className="gallery-box col-md-3 col-sm-4 col-xs-4 lunch">
          <a href="assets/images/gallery7.jpg"><img src="assets/images/gallery7.jpg" alt="Gallery" /></a>
        </div>
        <div className="gallery-box col-md-3 col-sm-4 col-xs-4 nonveg">
          <a href="assets/images/gallery8.jpg"><img src="assets/images/gallery8.jpg" alt="Gallery" /></a>
        </div>

  )

}
}

export default Images;
