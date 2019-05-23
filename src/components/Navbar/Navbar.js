import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'



// class Navbar extends Component {

  const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;


  return (





    <div>
    <nav class="navbar ownavigation">
    <header className="header_s header_s2">
      <nav className="navbar ownavigation" id="nav">

        <div className="container">
          <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

            <a className="navbar-brand" href="index.html"><img src="assets/images/logo3.png" alt="logo"/></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">

              <li><Link to="home">HOME</Link></li>
              <li><Link to="story">STORY</Link></li>
              <li><Link to="book">BOOK</Link></li>
              <li><Link to="shop">SHOP</Link></li>
              <li><Link to="cart">CART</Link></li>
              <li><Link to="contact">CONTACT</Link></li>
              <li>{links}</li>

            </ul>
          </div>
          </div>
        </nav>
        </header>
      </nav>
    </div>

    )
  }

  const mapStateToProps = (state) => {
    // console.log(state);
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }

  export default connect(mapStateToProps)(Navbar)
