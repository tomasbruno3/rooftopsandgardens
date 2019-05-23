import React, { Component } from 'react';

import firebase from '../../config/fbConfig.js';
import { connect } from 'react-redux'
import { createMail } from '../../store/actions/mailAction.js'

class Footer extends Component {

  constructor(props) {
      super(props)
      this.state= {
            mail: "",

      };

  }

inputEmailChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMail(this.state);
    this.setState({
      mail: "",

    })
  }

render () {

  return (
    <div>
    <footer id="footer-main" className="container-fluid no-left-padding no-right-padding footer-main footer-main-2">

      <div className="container-fluid no-left-padding no-right-padding top-footer">

        <div className="container">

          <div className="row">


            <div className="col-md-3 col-sm-6 col-xs-6">
              <aside className="widget widget_category">
                <h3 className="widget-title">OUR SERVICES</h3>
                <ul>
                  <li className="cat-item"><a title="THE STORY">THE STORY</a></li>
                  <li className="cat-item"><a title="BOOK TABLE">BOOK TABLE</a></li>
                  <li className="cat-item"><a title="OUR EVENT">OUR EVENT</a></li>
                  <li className="cat-item"><a title="GIFT SHOP">GIFT SHOP</a></li>
                  <li className="cat-item"><a title="YOUR CART">YOUR CART</a></li>
                  <li className="cat-item"><a title="CONTACT US">CONTACT US</a></li>
                </ul>
              </aside>
            </div>


            <div className="col-md-3 col-sm-6 col-xs-6">
              <aside className="widget widget_workingtime">
                <h3 className="widget-title">BOOK OPTIONS</h3>
                <div className="working-time-table">
                  <table>
                  <tbody>
                    <tr>
                      <td>Monday - Friday</td>
                      <td>------ ONLY - NIGHTS</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>--- DAY & NIGHT</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>--- DAY & NIGHT</td>
                    </tr>
                    <tr>
                      <td>Public Holidays</td>
                      <td>------ CONSULT</td>
                    </tr>
                  </tbody>
                  </table>
                </div>
                <aside className="widget widget_subscribe">
                  <div className="input-group">
                    <form onSubmit={this.handleSubmit}>
                    <input onChange={this.inputEmailChange} name="mail" value ={this.state.mail} type="text" className="form-control" placeholder="Your email"/>
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="submit" value="SUBMIT">submit</button>

                    </span>
                    </form>
                  </div>
                </aside>
              </aside>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-6">
              <aside className="widget widget_instagram">
                <h3 className="widget-title">join us our instagram</h3>
                <div className="instafeed">
                  <a href="#"><img src="assets/images/insta_1.jpg" alt="Instagram" /></a>
                  <a href="#"><img src="assets/images/insta_1.jpg" alt="Instagram" /></a>
                  <a href="#"><img src="assets/images/insta_5.jpg" alt="Instagram" /></a>
                  <a href="#"><img src="assets/images/insta_4.jpg" alt="Instagram" /></a>
                  <a href="#"><img src="assets/images/insta_3.jpg" alt="Instagram" /></a>
                  <a href="#"><img src="assets/images/insta_6.jpg" alt="Instagram" /></a>
                </div>
              </aside>
            </div>


            <div className="col-md-3 col-sm-6 col-xs-6">
              <aside className="widget widget_about">
                <h3 className="widget-title">ABOUT US</h3>
                <p>The Love Boat soon will be making an other run. The Love Boat prompt mises some to thing for everyone. Come join us. Come join us again!</p>
                <aside className="widget widget_social">
                  <ul>
                    <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" title="Pinterest"><i className="fa fa-pinterest"></i></a></li>
                  </ul>
                </aside>
              </aside>
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid bottom-footer">
        <p>R O O F T O P  &  G A R D E N S</p>
      </div>
    </footer>
  </div>


  )
}
}

const mapDispatchToProps = dispatch => {
  return {
    createMail: (mail) => dispatch(createMail(mail))
  }
}

export default connect(null, mapDispatchToProps)(Footer)
