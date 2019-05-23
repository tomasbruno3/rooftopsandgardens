import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
    <div className="navbar-header">
    <div id="navbar" className="navbar-collapse collapse">

      <ul className="nav navbar-nav navbar-right">

        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><Link to='/user' className="">
          {props.profile.initials}
        </Link></li>

      </ul>
    </div>
    </div>


    </div>


  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
