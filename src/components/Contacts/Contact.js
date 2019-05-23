import React, { Component } from 'react';



class ContactUs extends Component {


  render () {

   return (

<div>
<div className="container-header no-left-padding no-right-padding page-banner text-center">

  <div className="container">
    <h3>CONTACT</h3>
    <ol className="breadcrumb">
      <li><a href="/book">Book Table</a></li>
      <li className="active">CONTACT</li>
    </ol>
  </div>
</div>
<div className="clearfix"></div>

<main className="site-main">


  <div className="container-fluid no-left-padding no-right-padding contact-details">

    <div className="container">

      <div className="row">
        <div className="col-md-4 col-sm-4">
          <div className="cnt-detail-box">
            <i><img src="assets/images/cnt-phone.png" alt="Phone" /></i>
            <h4>CALL US</h4>
            <p><a href="tel:+115329874632">(+34) 677 88 66 32</a></p>
            <p><a href="tel:+437493729876">(+34) 677 99 77 32</a></p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="cnt-detail-box">
            <i><img src="assets/images/cnt-email.png" alt="EMAIL" /></i>
            <h4>EMAIL</h4>
            <p><a href="mailto:info@maxrestaurant.com">info@rooftopandgardens.com</a></p>
            <p><a href="mailto:support@maxrestaurant.co">booktable@rooftopandgardens.com</a></p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="cnt-detail-box">
            <i><img src="assets/images/cnt-marker.png" alt="Marker" /></i>
            <h4>Address</h4>
            <p>Barcelona - Espana</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid no-left-padding no-right-padding contact-section">

    <div className="container">

      <div className="row">
        <div className="col-xs-12 no-left-padding no-right-padding contact-form">
          <div className="col-xs-12 text-center">
            <h3>CONTACT US</h3>
          </div>
          <form className="col-md-12 col-sm-12 col-xs-12 no-left-padding no-right-padding">
            <div className="form-group col-sm-6 col-xs-12">
              <input type="text" className="form-control" placeholder="Name*" name="contact-name" id="input_name" required="" />
            </div>
            <div className="form-group col-sm-6 col-xs-12">
              <input type="text" className="form-control" placeholder="Phone Number*" name="contact-phone" id="input_phone" required="" />
            </div>
            <div className="form-group col-sm-6 col-xs-12">
              <input type="text" className="form-control" placeholder="Email*" name="contact-email" id="input_email" />
            </div>
            <div className="form-group col-sm-6 col-xs-12">
              <input type="text" className="form-control" placeholder="Address*" name="contact-address" id="input_address" />
            </div>
            <div className="form-group col-sm-12 col-xs-12">
              <textarea className="form-control" placeholder="Enter Your Message Here*" name="textarea-message" id="textarea_message"></textarea>
            </div>
            <div className="form-group col-sm-12 col-xs-12">
              <button title="SEND MESSAGE" type="submit" id="btn_submit" name="post">submit</button>
            </div>
            <div id="alert-msg" className="alert-msg"></div>
          </form>
        </div>
      </div>
    </div>
  </div>



</main>
</div>

)
}
}

export default ContactUs;
